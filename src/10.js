const censor = (text, censorWords, censorSymbol = '#') => text.replace(new RegExp(`${censorWords.join('|')}`, 'g'), selected => censorSymbol.repeat(selected.length));

module.exports = censor;
