(function()
{
	return function()
	{
		nexacro._setCSSMaps(
		{
            "Static" :
            			{
            				"class" :
            				[
            					{
            						"sta_label" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"font" : nexacro.FontObject("bold 13px \"Arial\",\"Malgun Gothic\",\"Gulim\""),
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 5px 0px 5px")
            								}
            							}
            						}
            					},
            					{
            						"sta_labelbox" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #c7c7c7"),
            									"padding" : nexacro.PaddingObject("0px 5px 0px 5px")
            								}
            							}
            						}
            					},
            					{
            						"sta_searchbox" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #c7c7c7"),
            									"padding" : nexacro.PaddingObject("0px 5px 0px 5px")
            								}
            							}
            						}
            					}
            				]
            			},
            			"Button" :
            			{
            				"class" :
            				[
            					{
            						"btn_search" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("12px \"Malgun Gothci\",\"Arial\",\"Gulim\""),
            									"border" : nexacro.BorderObject("1px solid #6f397e")
            								},
            								"focused" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("12px \"Malgun Gothci\",\"Arial\",\"Gulim\""),
            									"border" : nexacro.BorderObject("1px solid #6f397e")
            								},
            								"selected" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("12px \"Malgun Gothci\",\"Arial\",\"Gulim\""),
            									"border" : nexacro.BorderObject("1px solid #6f397e")
            								},
            								"mouseover" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"border" : nexacro.BorderObject("1px solid #6f397e")
            								},
            								"pushed" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"border" : nexacro.BorderObject("1px solid #6f397e")
            								},
            								"disabled" :
            								{
            									"color" : nexacro.ColorObject("#aaaaaa"),
            									"border" : nexacro.BorderObject("1px solid #aaaaaa")
            								}
            							}
            						}
            					}
            				]
            			}
		},
		{
            "includeStatusMap" : true
		}
		);
		var imgcache = nexacro._getImageCacheMaps();

	};
}
)();
