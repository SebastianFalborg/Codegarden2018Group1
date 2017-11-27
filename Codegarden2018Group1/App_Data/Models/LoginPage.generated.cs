//------------------------------------------------------------------------------
// <auto-generated>
//   This code was generated by a tool.
//
//    Umbraco.ModelsBuilder v3.0.7.99
//
//   Changes to this file will be lost if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Web;
using Umbraco.Core.Models;
using Umbraco.Core.Models.PublishedContent;
using Umbraco.Web;
using Umbraco.ModelsBuilder;
using Umbraco.ModelsBuilder.Umbraco;

namespace Umbraco.Web.PublishedContentModels
{
	/// <summary>Login page</summary>
	[PublishedContentModel("loginPage")]
	public partial class LoginPage : PublishedContentModel, IContentComposition, ISEO
	{
#pragma warning disable 0109 // new is redundant
		public new const string ModelTypeAlias = "loginPage";
		public new const PublishedItemType ModelItemType = PublishedItemType.Content;
#pragma warning restore 0109

		public LoginPage(IPublishedContent content)
			: base(content)
		{ }

#pragma warning disable 0109 // new is redundant
		public new static PublishedContentType GetModelContentType()
		{
			return PublishedContentType.Get(ModelItemType, ModelTypeAlias);
		}
#pragma warning restore 0109

		public static PublishedPropertyType GetModelPropertyType<TValue>(Expression<Func<LoginPage, TValue>> selector)
		{
			return PublishedContentModelUtility.GetModelPropertyType(GetModelContentType(), selector);
		}

		///<summary>
		/// Bodytext
		///</summary>
		[ImplementPropertyType("bodytext")]
		public string Bodytext
		{
			get { return Umbraco.Web.PublishedContentModels.ContentComposition.GetBodytext(this); }
		}

		///<summary>
		/// Content image
		///</summary>
		[ImplementPropertyType("contentImage")]
		public IPublishedContent ContentImage
		{
			get { return Umbraco.Web.PublishedContentModels.ContentComposition.GetContentImage(this); }
		}

		///<summary>
		/// Headline
		///</summary>
		[ImplementPropertyType("headline")]
		public string Headline
		{
			get { return Umbraco.Web.PublishedContentModels.ContentComposition.GetHeadline(this); }
		}

		///<summary>
		/// Meta description
		///</summary>
		[ImplementPropertyType("metaDescription")]
		public string MetaDescription
		{
			get { return Umbraco.Web.PublishedContentModels.SEO.GetMetaDescription(this); }
		}

		///<summary>
		/// Meta keywords
		///</summary>
		[ImplementPropertyType("metaKeywords")]
		public string MetaKeywords
		{
			get { return Umbraco.Web.PublishedContentModels.SEO.GetMetaKeywords(this); }
		}
	}
}
