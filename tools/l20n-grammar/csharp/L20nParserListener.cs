//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     ANTLR Version: 4.7
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

// Generated from L20nParser.g4 by ANTLR 4.7

// Unreachable code detected
#pragma warning disable 0162
// The variable '...' is assigned but its value is never used
#pragma warning disable 0219
// Missing XML comment for publicly visible type or member '...'
#pragma warning disable 1591
// Ambiguous reference in cref attribute
#pragma warning disable 419

using Antlr4.Runtime.Misc;
using IParseTreeListener = Antlr4.Runtime.Tree.IParseTreeListener;
using IToken = Antlr4.Runtime.IToken;

/// <summary>
/// This interface defines a complete listener for a parse tree produced by
/// <see cref="L20nParser"/>.
/// </summary>
[System.CodeDom.Compiler.GeneratedCode("ANTLR", "4.7")]
[System.CLSCompliant(false)]
public interface IL20nParserListener : IParseTreeListener {
	/// <summary>
	/// Enter a parse tree produced by <see cref="L20nParser.document"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	void EnterDocument([NotNull] L20nParser.DocumentContext context);
	/// <summary>
	/// Exit a parse tree produced by <see cref="L20nParser.document"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	void ExitDocument([NotNull] L20nParser.DocumentContext context);
	/// <summary>
	/// Enter a parse tree produced by <see cref="L20nParser.entity"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	void EnterEntity([NotNull] L20nParser.EntityContext context);
	/// <summary>
	/// Exit a parse tree produced by <see cref="L20nParser.entity"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	void ExitEntity([NotNull] L20nParser.EntityContext context);
	/// <summary>
	/// Enter a parse tree produced by <see cref="L20nParser.entityName"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	void EnterEntityName([NotNull] L20nParser.EntityNameContext context);
	/// <summary>
	/// Exit a parse tree produced by <see cref="L20nParser.entityName"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	void ExitEntityName([NotNull] L20nParser.EntityNameContext context);
	/// <summary>
	/// Enter a parse tree produced by <see cref="L20nParser.entityValue"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	void EnterEntityValue([NotNull] L20nParser.EntityValueContext context);
	/// <summary>
	/// Exit a parse tree produced by <see cref="L20nParser.entityValue"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	void ExitEntityValue([NotNull] L20nParser.EntityValueContext context);
	/// <summary>
	/// Enter a parse tree produced by <see cref="L20nParser.entityProperty"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	void EnterEntityProperty([NotNull] L20nParser.EntityPropertyContext context);
	/// <summary>
	/// Exit a parse tree produced by <see cref="L20nParser.entityProperty"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	void ExitEntityProperty([NotNull] L20nParser.EntityPropertyContext context);
	/// <summary>
	/// Enter a parse tree produced by <see cref="L20nParser.misc"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	void EnterMisc([NotNull] L20nParser.MiscContext context);
	/// <summary>
	/// Exit a parse tree produced by <see cref="L20nParser.misc"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	void ExitMisc([NotNull] L20nParser.MiscContext context);
}
