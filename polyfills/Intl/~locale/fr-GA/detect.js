'Intl' in this &&
			Intl.Collator &&
			Intl.Collator.supportedLocalesOf &&
			Intl.Collator.supportedLocalesOf('fr-GA').length === 1 &&
			Intl.DateTimeFormat &&
			Intl.DateTimeFormat.supportedLocalesOf &&
			Intl.DateTimeFormat.supportedLocalesOf('fr-GA').length === 1 &&
			Intl.NumberFormat &&
			Intl.NumberFormat.supportedLocalesOf &&
			Intl.NumberFormat.supportedLocalesOf('fr-GA').length === 1