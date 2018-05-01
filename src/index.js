const nova = require('nova-colors')

const sourceString =`<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
	<key>name</key>
	<string>nova.ansiGroups</string>
	<key>settings</key>
	<array>
		<dict>
			<key>settings</key>
			<dict>
				<key>background</key>
				<string>${nova.ansiGroups.normal.black}</string>
				<key>foreground</key>
				<string>${nova.ansiGroups.bright.black}</string>
				<key>caret</key>
				<string>${nova.ansiGroups.normal.red}</string>
				<key>invisibles</key>
				<string>${nova.default.grays.gray2}</string>
				<key>lineHighlight</key>
				<string>${nova.default.grays.gray2}</string>
				<key>selection</key>
				<string>${nova.ansiGroups.normal.cyan}7F</string>
				<key>findMatchHighlight</key>
				<string>${nova.ansiGroups.normal.cyan}40</string>
				<key>rangeHighlight</key>
				<string>${nova.ansiGroups.normal.cyan}40</string>
				<key>currentFindMatchHighlight</key>
				<string>${nova.ansiGroups.normal.cyan}7F</string>
			</dict>
		</dict>
		<dict>
			<key>name</key>
			<string>TOKEN</string>
			<key>scope</key>
			<string>token</string>
			<key>settings</key>
			<dict>
				<key>foreground</key>
				<string>${nova.ansiGroups.normal.white}</string>
			</dict>
		</dict>
		<dict>
			<key>name</key>
			<string>CONSTANT</string>
			<key>scope</key>
			<string>string.single, string.template, string.double, string.regex, constant, numeric, boolean, punctuation.string, variable.property, variable.other, dictionary.value, css.property-value, markup.link, markup.raw, html.id, meta.function.type.parameter, meta.indexer.parameter</string>
			<key>settings</key>
			<dict>
				<key>foreground</key>
				<string>${nova.syntaxGroups.constant}</string>
			</dict>
		</dict>	
		<dict>
			<key>name</key>
			<string>IDENTIFIER</string>
			<key>scope</key>
			<string>variable, function.entity, object.key, variable, entity.class, entity.name.tag, css.attribute-name, css.tag, jsx.attribute-name, html.tag</string>
			<key>settings</key>
			<dict>
				<key>foreground</key>
				<string>${nova.syntaxGroups.identifier}</string>
			</dict>
		</dict>
		<dict>
			<key>name</key>
			<string>STATEMENT</string>
			<key>scope</key>
			<string>keyword, control, operator, punctuation.operator, css.property-name, jsx.component, jsx.tag, html.attribute-name, entity.other.attribute-name</string>
			<key>settings</key>
			<dict>
				<key>foreground</key>
				<string>${nova.syntaxGroups.statement}</string>
			</dict>
		</dict>
		<dict>
			<key>name</key>
			<string>TYPE</string>
			<key>scope</key>
			<string>storage, undefined, null, nan, entity.name.class, meta.enum</string>
			<key>settings</key>
			<dict>
				<key>foreground</key>
				<string>${nova.syntaxGroups.type}</string>
			</dict>
		</dict>
		<dict>
			<key>name</key>
			<string>GLOBAL</string>
			<key>scope</key>
			<string> module, import, include, dom, this, builtin, process </string>
			<key>settings</key>
			<dict>
				<key>foreground</key>
				<string>${nova.ansiGroups.normal.magenta}</string>
			</dict>
		</dict>
		<dict>
			<key>name</key>
			<string>EMPHASIS</string>
			<key>scope</key>
			<string>css.pseudo-class, markup.italic, markup.bold</string>
			<key>settings</key>
			<dict>
				<key>foreground</key>
				<string>${nova.ansiGroups.bright.magenta}</string>
			</dict>
		</dict>
		<dict>
			<key>name</key>
			<string>SPECIAL</string>
			<key>scope</key>
			<string>arrow, punctuation.parameters, quasi.begin, quasi.end, dictionary.begin, dictionary.end, module.all, css.property-list, css.function, markup.heading, list</string>
			<key>settings</key>
			<dict>
				<key>foreground</key>
				<string>${nova.syntaxGroups.special}</string>
			</dict>
		</dict>
		<dict>
			<key>name</key>
			<string>TRIVIAL</string>
			<key>scope</key>
			<string>comment, punctuation</string>
			<key>settings</key>
			<dict>
				<key>foreground</key>
				<string>${nova.syntaxGroups.trivial}</string>
			</dict>
		</dict>
		</array>
	<key>uuid</key>
	<string>f0585502-0d66-4ff4-b3f4-ae6ffb40832e</string>
</dict>
</plist>

`

process.stdout.write(sourceString)
