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
            						"sta_WF_GTitle" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"padding" : nexacro.PaddingObject("0px 20px"),
            									"font" : nexacro.FontObject("normal 700 18px/normal \"Malgun Gothic\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_GLabel" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#000000"),
            									"padding" : nexacro.PaddingObject("0px 20px"),
            									"border" : nexacro.BorderObject("1px solid #b3b5b8")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_GArea" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #b3b5b8")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_G" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#ff0000"),
            									"font" : nexacro.FontObject("12px \"Malgun Gothic\""),
            									"border" : nexacro.BorderObject("0px none,0px none,0px none,1px solid #ff0000"),
            									"padding" : nexacro.PaddingObject("0px 20px")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_GTxt" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"font" : nexacro.FontObject("12px \"Noto Sans KR\""),
            									"color" : nexacro.ColorObject("#ff0000")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_GSize" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#ff0000"),
            									"font" : nexacro.FontObject("12px \"Malgun Gothic\""),
            									"border" : nexacro.BorderObject("0px none,0px none,0px none,1px solid #ff0000"),
            									"padding" : nexacro.PaddingObject("0px 20px")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_GLineV" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"edge" : nexacro.EdgeImageObject("url('theme://images/sta_WF_GLineV.png') 5px 2px")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_GLineH" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"edge" : nexacro.EdgeImageObject("URL('theme://images/sta_WF_GLineH.png') 5px 2px")
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
