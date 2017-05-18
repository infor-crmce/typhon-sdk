import {
  showView,
  resetViewSet,
} from './actions/index';

/*
Viewsets (visible) | history

Two viewports:
[ 1 ] | [ { viewset: [ 1 ], viewports: 1 } ] <-- 1 viewport, go full screen (viewports < maxviewports)
[ 1, 2 ] | [{ viewset: [ 1 ], viewports: 1 }, { viewset: [ 1, 2 ], viewports: 2 } ] <-- 2 viewports, go split (viewports === maxviewports)
[ 2, 3 ] | [{ viewset: [ 1 ], viewports: 1 }, { viewset: [ 1, 2 ], viewports: 2 }, { viewset: [ 2, 3 ], viewports: 2 } ] <-- shift view 2 left and push 3 on
-- Window resize, max viewport set to 1 --
[ 2, 3 ] | [ { viewset: [ 1 ], viewports: 1 },
             { viewset: [ 1 , 2], viewports: 2 },
             { viewset: [ 2, 3 ], viewports: 1 } ] <-- Render the right most N item(s) in the viewset where N is the viewport

Assume the rest of the history is an object containing the viewset and viewports
-- User hits back
[ 1, 2 ] | [ 1, 2 ] <-- Still 1 viewport
-- User maxes Window
[ 1, 2 ] | [ 1, 2 ] <-- no history changes, just render N right most supported views

Three viewports:
[ 1 ] | [ 1 ]
[ 1, 2 ] | [ 1, 2 ] <-- Expand 2 to fill the remaining available viewports (viewports < maxviewports)
[ 1, 2, 3 ] | [ 1, 2, 3] <-- 3 way split
[ 2, 3, 4 ] | [ 1, 2, 3, 4 ] <-- Right N viewports rendered where N = maxviewports
-- User hits back
[ 1, 2, 3 ] | [ 1, 2, 3 ]
-- User hits back
[ 1, 2 ] | [1, 2]
-- User hits back
[1 ] | [ 1 ] <-- viewport filled again

A view might want to indicate a new viewset should be created in the middle of navigating:
[ 1 ] | [ 1 ]
[ 1, 2 ] | [ 1, 2 ]
[ 3 ] | [ { viewset: [ 1 ], viewports: 1 },
          { viewset: [ 1, 2 ], viewports: 2 },
          { viewset: [ 3 ], viewports: 1 } ] <-- New viewset triggered, viewports reset to 1
[ 3, 4 ] | [ 1, 2, 3, 4 ]
-- User hits back
[ 3 ] | [ 1, 2, 3 ]
*/
export default class Scene {
  constructor(store) {
    this.store = store;
    this.maxviewports = 0;
    this.viewset = [];
    this._updateState();
    this.store.subscribe(this._updateState.bind(this));
  }

  _updateState() {
    const state = this.store.getState();
    this.updateViewsets(state);
    this.updateMaxViewports(state);
  }

  updateViewsets(state, force = false) {
    if (state.sdk.viewset !== this.viewset || force) {
      const removedViews = this.viewset.filter(v => state.sdk.viewset.indexOf(v) === -1);
      removedViews.forEach((v) => {
        const view = App.getView(v);
        if (view) {
          view.unselect(view.domNode);
          $(view.domNode).css({ order: '' });
        }
      });
      state.sdk.viewset.forEach((v, i) => {
        const view = App.getView(v);
        if (view) {
          $(view.domNode).css({ order: i });
          view.select(view.domNode);
        }
      });
    }

    this.viewset = state.sdk.viewset;
  }

  updateMaxViewports(state) {
    if (state.sdk.maxviewports !== this.maxviewports) {
      const length = state.sdk.viewset.length;
      if (length > state.sdk.maxviewports) {
        const diff = length - state.sdk.maxviewports;
        state.sdk.viewset.filter((_, i) => i < diff)
          .forEach((v) => {
            const view = App.getView(v);
            if (view) {
              view.unselect(view.domNode);
              $(view.domNode).css({ order: '' });
            }
          });
      } else {
        this.updateViewsets(state, true);
      }
    }

    this.maxviewports = state.sdk.maxviewports;
  }

  _select(id, value) {
    const domNode = document.getElementById(id);
    if (domNode) {
      domNode.setAttribute('selected', value);
    }
  }

  _setSelectedState(views, state) {
    views.forEach(id => this._select(id, state));
  }

  show(viewId, viewOptions, transitionOptions, currentViewId) {
    const currentHash = window && window.location.hash || '';
    this.store.dispatch(showView(viewId, viewOptions, currentHash, currentViewId));
    const view = App.getView(viewId);
    if (view) {
      view.show(viewOptions, transitionOptions);
    }
  }

  showNew(viewId, viewOptions, transitionOptions, currentViewId) {
    this.store.dispatch(resetViewSet());
    this.show(viewId, viewOptions, transitionOptions, currentViewId);
  }
}
