const nova = require('nova-colors')

const sourceString =`<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
	<key>name</key>
	<string>Nova</string>
	<key>settings</key>
	<array>
		<dict>
			<key>settings</key>
			<dict>
				<key>background</key>
				<string>${nova.normal.black}</string>
				<key>foreground</key>
				<string>${nova.bright.black}</string>
				<key>caret</key>
				<string>${nova.normal.red}</string>
				<key>invisibles</key>
				<string>${nova.decoration.medium}</string>
				<key>lineHighlight</key>
				<string>${nova.decoration.medium}</string>
				<key>selection</key>
				<string>${nova.normal.cyan}7F</string>
				<key>findMatchHighlight</key>
				<string>${nova.normal.cyan}40</string>
				<key>rangeHighlight</key>
				<string>${nova.normal.cyan}7F</string>
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
				<string>${nova.normal.white}</string>
			</dict>
		</dict>
		<dict>
			<key>name</key>
			<string>CONSTANT</string>
			<key>scope</key>
			<string>constant, numeric, boolean, string.single, string.template, string.double, punctuation.string, variable.property, variable.other, dictionary.value, css.property-value, markup.link, markup.raw, html.id</string>
			<key>settings</key>
			<dict>
				<key>foreground</key>
				<string>${nova.normal.cyan}</string>
			</dict>
		</dict>
		<dict>
			<key>name</key>
			<string>IDENTIFIER</string>
			<key>scope</key>
			<string>variable, function.entity, object.key, variable, entity.class, css.attribute-name, css.tag, jsx.attribute-name, html.tag</string>
			<key>settings</key>
			<dict>
				<key>foreground</key>
				<string>${nova.normal.blue}</string>
			</dict>
		</dict>
		<dict>
			<key>name</key>
			<string>STATEMENT</string>
			<key>scope</key>
			<string> keyword, control, operator, punctuation.operator, css.property-name, jsx.component, jsx.tag, html.attribute-name </string>
			<key>settings</key>
			<dict>
				<key>foreground</key>
				<string>${nova.normal.yellow}</string>
			</dict>
		</dict>
		<dict>
			<key>name</key>
			<string>TYPE</string>
			<key>scope</key>
			<string>storage, undefined, null, nan</string>
			<key>settings</key>
			<dict>
				<key>foreground</key>
				<string>${nova.normal.green}</string>
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
				<string>${nova.normal.magenta}</string>
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
				<string>${nova.bright.magenta}</string>
			</dict>
		</dict>
		<dict>
			<key>name</key>
			<string>SPECIAL</string>
			<key>scope</key>
			<string> arrow, brace.square, brace.curly, brace.round, punctuation.parameters, quasi.begin, quasi.end, dictionary.begin, dictionary.end, module.all, css.property-list, css.function, markup.heading, list, jsx.embedded </string>
			<key>settings</key>
			<dict>
				<key>foreground</key>
				<string>${nova.bright.red}</string>
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
				<string>${nova.bright.black}</string>
			</dict>
		</dict>
	</array>
	<key>uuid</key>
	<string>f0585502-0d66-4ff4-b3f4-ae6ffb40832e</string>
</dict>
</plist>

`

process.stdout.write(sourceString)
