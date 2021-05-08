# [![](../assets/img/logo-readme2.jpg)](https://devmentor.pl) &nbsp; React: Styling #03

> :loudspeaker: Jeśli chciałbyś więcej tego typu zadań to zapraszam do :moneybag: [wsparcia mojego konta](https://github.com/sponsors/devmentor-pl)!

&nbsp;

Kolejnym komponentem z [React Boostrap](https://react-bootstrap.github.io/components/breadcrumb/) jest `<Breadcrumb>`, który wykorzystuje dodatkowo `<Breadcrumb.Item>`, co umożliwia tworzenie tzw. okruchów chleba.

Wystarczy, że Twój komponent `<Breadcrumb.Item>` będzie wspierał opcje:
* href
* active

Zwróć uwagę, ze React Boostrap w [swoich źródłach](https://github.com/react-bootstrap/react-bootstrap/tree/master/src) ma komponenty w osobnych plikach tj. `Breadcrumb.tsx` (rozszerzenie `.tsx` oznacza, że deweloperzy wykorzystują [TypeScript](https://pl.wikipedia.org/wiki/TypeScript)) oraz `BreadcrumbItem.tsx`, a dopiero przy eksporcie ([koniec pliku](https://github.com/react-bootstrap/react-bootstrap/blob/master/src/Breadcrumb.tsx)) dołącza do właściwości `Breadcrumb.Item` importowany komponent `BreadcrumbItem` (`Breadcrumb.Item = BreadcrumbItem`). Możesz zrobić podobnie.

Tym razem sam stwórz wygodną dla siebie strukturę plików w lokalizacji `./src/components/Breadcrumb` i wykorzystaj ją w `./03/Task3.js`.

&nbsp;

> :warning: Jeśli nie posiadasz materiałów do tego zadania to znajdziesz je na stronie [devmentor.pl](https://devmentor.pl)

