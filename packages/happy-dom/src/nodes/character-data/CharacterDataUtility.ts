import ICharacterData from './ICharacterData';

const HTML_ENTITIES = [
	{ regex: /&quot;/g, value: '"' },
	{ regex: /&#34/g, value: '"' },
	{ regex: /&#x22/g, value: '"' },
	{ regex: /&amp;/g, value: '&' },
	{ regex: /&#38/g, value: '&' },
	{ regex: /&#x26/g, value: '&' },
	{ regex: /&apos;/g, value: "'" },
	{ regex: /&#39/g, value: "'" },
	{ regex: /&#x27/g, value: "'" },
	{ regex: /&lt;/g, value: '<' },
	{ regex: /&#60/g, value: '<' },
	{ regex: /&#x3C/g, value: '<' },
	{ regex: /&gt;/g, value: '>' },
	{ regex: /&#62/g, value: '>' },
	{ regex: /&#x3E/g, value: '>' },
	{ regex: /&nbsp;/g, value: ' ' },
	{ regex: /&#160/g, value: ' ' },
	{ regex: /&#xA0/g, value: ' ' }
];

/**
 * Child node utility.
 */
export default class CharacterDataUtility {
	/**
	 * Appends the given DOMString to the CharacterData.data string; when this method returns, data contains the concatenated DOMString.
	 *
	 * @param characterData Character data.
	 * @param data Data.
	 */
	public static appendData(characterData: ICharacterData, data: string): void {
		characterData.data += data;
	}

	/**
	 * Removes the specified amount of characters, starting at the specified offset, from the CharacterData.data string; when this method returns, data contains the shortened DOMString.
	 *
	 * @param characterData Character data.
	 * @param offset Offset.
	 * @param count Count.
	 */
	public static deleteData(characterData: ICharacterData, offset: number, count: number): void {
		characterData.data =
			characterData.data.substring(0, offset) + characterData.data.substring(offset + count);
	}

	/**
	 * Inserts the specified characters, at the specified offset, in the CharacterData.data string; when this method returns, data contains the modified DOMString.
	 *
	 * @param characterData Character data.
	 * @param offset Offset.
	 * @param data Data.
	 */
	public static insertData(characterData: ICharacterData, offset: number, data: string): void {
		characterData.data =
			characterData.data.substring(0, offset) + data + characterData.data.substring(offset);
	}
	/**
	 * Replaces the specified amount of characters, starting at the specified offset, with the specified DOMString; when this method returns, data contains the modified DOMString.
	 *
	 * @param characterData Character data.
	 * @param offset Offset.
	 * @param count Count.
	 * @param data Data.
	 */
	public static replaceData(
		characterData: ICharacterData,
		offset: number,
		count: number,
		data: string
	): void {
		characterData.data =
			characterData.data.substring(0, offset) + data + characterData.data.substring(offset + count);
	}

	/**
	 * Returns a DOMString containing the part of CharacterData.data of the specified length and starting at the specified offset.
	 *
	 * @param characterData Character data.
	 * @param offset Offset.
	 * @param count Count.
	 */
	public static substringData(
		characterData: ICharacterData,
		offset: number,
		count: number
	): string {
		return characterData.data.substring(offset, offset + count);
	}

	/**
	 * Decodes unicode characters to text.
	 *
	 * @param html String.
	 * @returns Decoded HTML string.
	 */
	public static decodeHTMLEntities(html: string): string {
		if (!html) {
			return '';
		}
		for (const entity of HTML_ENTITIES) {
			html = html.replace(entity.regex, entity.value);
		}
		return html;
	}
}
