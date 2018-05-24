const nova = require('nova-colors')

const sourceString =`{
	"$schema": "vscode://schemas/color-theme",
	"name": "Nova",
	"colors": {
		"activityBarBadge.background": "#7FC1CA",
		"activityBarBadge.foreground": "#3C4C55",
		"badge.background": "#7FC1CA",
		"badge.foreground": "#3C4C55",
		"button.background": "#7FC1CA",
		"button.foreground": "#3C4C55",
		"debugToolBar.background": "#1E272C",
		"debugExceptionWidget.background": "#DF8C8C",
		"debugExceptionWidget.border": "#DF8C8C",
		"dropdown.foreground": "#7FC1CA",
		"editor.background": "${nova.uiGroups.background}",
		"editor.foreground": "${nova.uiGroups.foreground}",
		"editorLineNumber.activeForeground": "#7FC1CA",
		"editor.lineHighlightBackground": "#556873",
		"editor.selectionBackground": "#6A7D89",
		"editor.findMatchBackground": "#6A7D89",
		"editor.wordHighlightBackground": "#556873",
		"editor.findRangeHighlightBackground": "#556873",
		"editor.inactiveSelectionBackground": "#556873",
		"editor.wordHighlightStrongBackground": "#556874",
		"editor.findMatchHighlightBackground": "#6A7D89",
		"editorLineNumber.foreground": "#6A7D89",
		"editorGroup.background": "#1E272C",
		"editorGroupHeader.noTabsBackground": "#1E272C",
		"editorGroupHeader.tabsBackground": "#1E272C",
		"editorWidget.border": "${nova.uiGroups.background}",
		"editorWidget.background": "${nova.uiGroups.background}",
		"editorGroup.border": "#899BA6",
		"extensionButton.prominentBackground": "#7FC1CA",
		"extensionButton.prominentForeground": "#3C4C55",
		"extensionButton.prominentHoverBackground": "#7FC1CA",
		"sideBar.background": "#1E272C",
		"scrollbar.shadow": "${nova.uiGroups.background}",
		"activityBar.background": "#1E272C",
		"tab.activeBackground": "${nova.uiGroups.background}",
		"tab.activeForeground": "#7FC1CA",
		"tab.inactiveBackground": "#1E272C",
		"tab.inactiveForeground": "#6A7D89",
		"tab.border": "#1E272C",
		"tab.activeBorder": "${nova.uiGroups.background}",
		"panelTitle.activeForeground": "#7FC1CA",
		"scrollbarSlider.background": "#7FC1CA",
		"list.activeSelectionBackground": "#7FC1CA",
		"list.activeSelectionForeground": "#3C4C55",
		"list.inactiveSelectionBackground": "#3C4C55",
		"list.inactiveSelectionForeground": "#7FC1CA",
		"list.hoverBackground": "#6A7D89",
		"list.focusBackground": "#1E272C",
		"list.focusForeground": "#7FC1CA",
		"list.highlightForeground": "#7FC1CA",
		"progressBar.background": "#7FC1CA",
		"input.background": "#556873",
		"input.border": "#556873",
		"input.foreground": "#7FC1CA",
		"input.placeholderForeground": "#d8dee9",
		"inputValidation.errorBackground": "#DF8C8C",
		"inputValidation.errorBorder": "#DF8C8C",
		"editorIndentGuide.background": "#556873",
		"inputOption.activeBorder": "#7FC1CA",
		"notification.errorBackground": "#DF8C8C",
		"notification.errorForeground": "#3C4C55",
		"notification.warningBackground": "#F2C38F",
		"notification.warningForeground": "#3C4C55",
		"notification.background": "#3C4C55",
		"notification.buttonBackground": "#556873",
		"peekViewTitle.background": "#1E272C",
		"peekView.border": "#1E272C",
		"peekViewEditor.background": "#3C4C55",
		"peekViewResult.background": "#1E272C",
		"peekViewResult.selectionBackground": "#7FC1CA",
		"peekViewResult.selectionForeground": "#3C4C55",
		"panelTitle.activeBorder": "#7FC1CA",
		"statusBar.background": "#1E272C",
		"statusBar.debuggingBackground": "#DF8C8C",
		"terminal.background": "#3C4C55",
		"terminal.foreground": "#C5D4DD",
		"terminal.ansiBlack": "#3C4C55",
		"terminal.ansiRed": "#DF8C8C",
		"terminal.ansiGreen": "#A8CE93",
		"terminal.ansiYellow": "#DADA93",
		"terminal.ansiBlue": "#83AFE5",
		"terminal.ansiMagenta": "#9A93E1",
		"terminal.ansiCyan": "#7FC1CA",
		"terminal.ansiWhite": "#C5D4DD",
		"terminal.ansiBrightBlack": "#899BA6",
		"terminal.ansiBrightMagenta": "#D18EC2",
		"terminal.ansiBrightWhite": "#E6EEF3",
		"titleBar.activeBackground": "#1E272C",
		"widget.shadow": "#00000066",
		"diffEditor.insertedTextBackground": "#A8CE930C",
		"diffEditor.insertedTextBorder": "#A8CE93",
		"diffEditor.removedTextBackground": "#DF8C8C0C",
		"diffEditor.removedTextBorder": "#DF8C8C",
		"editorHoverWidget.background": "#556873",
		"editorHoverWidget.border": "#3C4C55",
		"editorSuggestWidget.highlightForeground": "#7FC1CA",
		"editorSuggestWidget.background": "#556873",
		"editorSuggestWidget.border": "#556873",
		"editorSuggestWidget.selectedBackground": "#6A7D89",
		"editorOverviewRuler.addedForeground": "#A8CE93",
		"editorOverviewRuler.deletedForeground": "#DF8C8C",
		"editorOverviewRuler.modifiedForeground": "#F2C38F",
		"editorGutter.addedBackground": "#A8CE93",
		"editorGutter.deletedBackground": "#DF8C8C",
		"editorGutter.modifiedBackground": "#83AFE5"
	},
	"tokenColors": [
		{
			"scope": "emphasis",
			"settings": {
				"fontStyle": "italic",
				"foreground": "${nova.syntaxGroups.emphasis}"
			}
		},
		{
			"scope": "strong",
			"settings": {
				"fontStyle": "bold"
			}
		},
		{
			"scope": [
				"comment",
				"meta.selector"
			],
			"settings": {
				"foreground": "${nova.default.grays.gray4}"
			}
		},
		{
			"scope": [
				"constant.language",
				"constant.numeric",
				"string",
				"markup.inline.raw",
				"meta.brace.square"
			],
			"settings": {
				"foreground": "${nova.syntaxGroups.constant}"
			}
		},
		{
			"scope": "entity.name.tag.css",
			"settings": {
				"foreground": "${nova.syntaxGroups.special}"
			}
		},
		{
			"scope": [
				"entity.other.attribute-name.class.css",
				"entity.other.attribute-name.class.mixin.css",
				"entity.other.attribute-name.id.css",
				"entity.other.attribute-name.parent-selector.css",
				"entity.other.attribute-name.pseudo-class.css",
				"entity.other.attribute-name.pseudo-element.css",
				"source.css.less entity.other.attribute-name.id",
				"entity.other.attribute-name.attribute.scss",
				"entity.other.attribute-name.scss"
			],
			"settings": {
				"foreground": "${nova.syntaxGroups.emphasis}"
			}
		},
		{
			"scope": "markup",
			"settings": {
				"foreground": "${nova.syntaxGroups.emphasis}"
			}
		},
		{
			"scope": "markup.underline",
			"settings": {
				"fontStyle": "underline"
			}
		},
		{
			"scope": "markup.bold",
			"settings": {
				"fontStyle": "bold"
			}
		},
		{
			"scope": "markup.italic",
			"settings": {
				"fontStyle": "italic"
			}
		},
		{
			"scope": "markup.heading",
			"settings": {
				"fontStyle": "bold",
				"foreground": "${nova.syntaxGroups.special}"
			}
		},
		{
			"scope": "storage",
			"settings": {
				"foreground": "${nova.syntaxGroups.type}"
			}
		},
		{
			"name": "String interpolation",
			"scope": [
				"header",
				"markup.heading.markdown",
				"beginning.punctuation.definition.quote.markdown",
				"beginning.punctuation.definition.list.markdown",
				"punctuation.definition.tag",
				"punctuation.definition.template-expression.begin",
				"punctuation.definition.template-expression.end",
				"punctuation.section.embedded",
				"punctuation.definition.block",
				"entity.name.tag.tsx",
				"meta.brace.round",
				"storage.type.function.arrow"
			],
			"settings": {
				"foreground": "${nova.syntaxGroups.special}"
			}
		},
		{
			"scope": [
				"support.function",
				"entity.name.function",
				"keyword.operator.assignment"
			],
			"settings": {
				"foreground": "${nova.syntaxGroups.statement}"
			}
		},
		{
			"scope": [
				"variable.language",
				"keyword",
				"support.class",
				"entity.name.class",
				"entity.name.type.class"
			],
			"settings": {
				"foreground": "${nova.syntaxGroups.global}" 
			}
		},
		{
			"scope": [
				"entity.other.attribute-name.tsx",
				"support.type.property-name",
				"meta.object-literal.key",
				"entity.name.function",
				"entity.name.tag",
				"meta.definition.variable",
				"meta.function.expression",
				"variable.parameter",
				"variable.other.readwrite source",
				"variable.other.readwrite.alias",
				"variable.other.object"
			],
			"settings": {
				"foreground": "${nova.syntaxGroups.identifier}"
			}
		},
		{
			"scope": "support.variable.property",
			"settings": {
				"foreground": "${nova.default.grays.gray5}"
			}
		}
	]
}`

process.stdout.write(sourceString)
