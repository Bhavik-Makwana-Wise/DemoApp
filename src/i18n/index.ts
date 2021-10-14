import { translations as neptuneTranslations } from '@transferwise/components';
import { getLocalisedMessages } from '@transferwise/crab/client';

import cs from '../../i18n/cs.json';
import de from '../../i18n/de.json';
import en from '../../i18n/en.json';
import en_US from '../../i18n/en_US.json';
import es from '../../i18n/es.json';
import fr from '../../i18n/fr.json';
import hu from '../../i18n/hu.json';
import id from '../../i18n/id.json';
import it from '../../i18n/it.json';
import ja from '../../i18n/ja.json';
import pl from '../../i18n/pl.json';
import pt from '../../i18n/pt.json';
import ro from '../../i18n/ro.json';
import ru from '../../i18n/ru.json';
import tr from '../../i18n/tr.json';
import zh_HK from '../../i18n/zh_HK.json';

export const localMessages = {
  cs,
  de,
  en,
  en_US,
  es,
  fr,
  hu,
  id,
  it,
  ja,
  pl,
  pt,
  ro,
  ru,
  tr,
  zh_HK,
};

export default (locale: string): Record<string, string> => {
  return getLocalisedMessages(locale, [neptuneTranslations, localMessages]);
};
