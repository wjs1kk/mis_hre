(function()
{
	return function()
	{
		nexacro._setCSSMaps(
		{
            "Button" :
            			{
            				"class" :
            				[
            					{
            						"menu" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://images/menu.png')")
            								}
            							}
            						}
            					},
            					{
            						"btn_MDI_tabprev" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none, 1px solid #3360a5"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_MDI_tabPrev.png')")
            								}
            							}
            						}
            					},
            					{
            						"btn_MDI_tabnext" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none, 1px solid #3360a5"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_MDI_tabNext.png')")
            								}
            							}
            						}
            					},
            					{
            						"tabbar-button" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none, 1px solid #3360a5")
            								},
            								"disabled" :
            								{
            								}
            							}
            						}
            					}
            				]
            			},
            			"tabbuttonitem" :
            			{
            				"parent" :
            				{
            					"Tab" :
            					{
            						"class" :
            						[
            							{
            								"tab_MDI_menu" :
            								{
            									"self" :
            									{
            										"enabled" :
            										{
            											"font" : nexacro.FontObject("normal 700 12px/1 \"Malgun Gothic\""),
            											"color" : nexacro.ColorObject("#c9d5e7"),
            											"padding" : nexacro.PaddingObject("0px 10px 0px 0px")
            										}
            									}
            								}
            							}
            						],
            						"self" :
            						{
            							"selected" :
            							{
            								"color" : nexacro.ColorObject("#00388E")
            							}
            						}
            					}
            				}
            			},
            			"extrabutton" :
            			{
            				"parent" :
            				{
            					"tabbuttonitem" :
            					{
            						"parent" :
            						{
            							"Tab" :
            							{
            								"class" :
            								[
            									{
            										"tab_MDI_menu" :
            										{
            											"self" :
            											{
            												"selected" :
            												{
            												}
            											}
            										}
            									}
            								]
            							}
            						}
            					}
            				}
            			},
            			"tabbuttonitemtext" :
            			{
            				"parent" :
            				{
            					"tabbuttonitem" :
            					{
            						"parent" :
            						{
            							"Tab" :
            							{
            								"class" :
            								[
            									{
            										"tab_MDI_menu" :
            										{
            											"self" :
            											{
            												"enabled" :
            												{
            													"padding" : nexacro.PaddingObject("0px 14px 0px 25px")
            												}
            											}
            										}
            									}
            								]
            							}
            						}
            					}
            				}
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
