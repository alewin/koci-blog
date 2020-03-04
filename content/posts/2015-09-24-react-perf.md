---
date: 2020-01-10
title: 'Getting Started'
template: post
thumbnail: '../thumbnails/git.png'
slug: getting-started
categories:
  - Tools
tags:
  - first
---

- Centralizza il render dei componenti in un unico punto. Nel caso di Class component "render()" nel caso di functional component "return", se i componenti sono molto grandi, dividi in due funzioni i componenti e richiamali nel return, utilizzano appieno jsx ( if, else, switch)

```javascript{numberLines: 5}

function Component({ name}){
  if (name && phone){
    return (<p>{name} - {phone}</p>)
  }
  [....]
  if (!name){
    return (<p>Name not found</p>)
  }
}
```

```javascript
function Component({ name, phone}){
  [....]
  return name ? (
    <p>{name} - {phone}</p>
  ): (<p>Name not found</p>)
}
```

- Non usare un semplice booleano per definire lo stato di una rispota, ma prevedi uno stato di tipo "string" che possa esprireme appieno i vari stati ( SUCCESS, LOADING, PENDING, ERROR...) e non semplicemente isDone (true/false)

```javascript

function Component({ name}){
  const { isDone, data} = useDemoHook()

  if (!isDone) {
    return (<p>component loading</p>)
  } else {
    return (<p>{data}</p>)
  }
}
```

```javascript
function Component({ name, phone}){
  const { status, data} = useDemoHook()

  return (
    <>
      {{
          loading: <p>component loading</p>,
          error: <p>component error</p>,
          success: <p>{data}</p>,
        }[status]
      }
    </>
  )
}
```

- Usa il DevTools di chrome, per testare la tua applicazione in casi estremi, impostando "Network->Online->Slow 3G", "Disable Cache", Performance 6x
(immagine DevTools)

- Il re-render non è un problema, react provvede a questo problema con la riconcigliazione (https://it.reactjs.org/docs/reconciliation.html), cerca di indagare sul perchè i render sono lenti, non quanti ne vengono fatti
(React Perfomance DevTools)

- Non utilizzare useMemo e shouldComponentUpdate ovunque, cerca di scrivere il componente e poi ottimzarlo dove c'è la necessita, perchè `useMemo` e `shouldComponentUpdate` introducono un overhead e controllo, e rischi di rallentare piuttosto che ottimizzare


- Inserisci nello store di redux solo l'essenziale, mantenendo lo stato centralizzato snello, senza stati innestati e senza duplicazioni ( utilizza la referenza )

```md
STORE
  |
  |--products []
  |     |
  |     |[0] = { id:'prod1', name: "tv", categories: "cat1,cat2,cat3"}
  |     |[1] = { id:'prod2', name: "computer", categories: "cat3"}
  |
  |--categories {}
        |{prod1} = "cat1,cat2,cat3"
        |{prod2} = "cat3"
}

```md
STORE
  |
  |--products []
  |     |
  |     |[0] = { id:'prod1', name: "tv""}
  |     |[1] = { id:'prod2', name: "computer"}
  |
  |--categories {}
        |{prod1} = "cat1,cat2,cat3"
        |{prod2} = "cat3"
}


- Se un componente accetta una prop, non salvare il suo valore all'interno del suo stato locale, perchè rischi di creare sideeffect senza che il corretto funzionamento dell'aggiornamento delle prop causi il rendering del componente

- mantieni lo stesso nome delle prop per i componenti, sarà più facile effettuare un refactroing successivamente


- Utilizza lo stato dei componenti solo per salvato delle variabili essenziali, il restante calcolalo tramite delle funzioni o utils,

```javascript
const [price, setPrice] = React.useState(0)
const [fullPrice, setFullPrice] = React.useState(0)

setFullPrice(`${price}$`)

return (<p>{fullPrice}</p>)
```

```javascript
const [price, setPrice] = React.useState(0)
return (<p>{`${price}$}</p>)
```


- Utilizza `useReducer` invece di creare 4 o piu stati con `useState`


- evita il `props drilling`, utilizza un `context` `redux` o lo stato interno dei componenti 


- destrutturizza le variabile direttamente nei parametri della funzione


- utilizza propTypes in maniera corretta, definendo nello specifico quali parametri ti aspetti dal componente, se il componente è complesso commenta la prop (https://twitter.com/housecor/status/1184478553527771136)


- Riutilizza i componenti e gli stili, per maggior chiarezza e performance (storyBook


- utilizza un layout comune per tutte le pagine <Layout> modulate con la possibilità di aggiungere o togliere header o footer

```
<Layout>
  <Layout.Header>
  </Layout.Header>

  <Layout.Main>
  </Layout.Main>

  <Layout.Footer>
  </Layout.Footer>
</Layout>>
```

- aggiungi i test e2e cypress o testcafe

- usa webpack-bundle-analyzer prettier eslint  utilizza .editorconfig e extensions.json per indicare quali sono le esensioni consigliate, e le preferenze dell'editor consigliato


- DRY centralizza le proptypes https://transform.tools/

```javasript
export const productType = PropTypes.shape({
  id: number,
  name: string.isRequired,
  cageories: string.isRequired,
})

Product.propTypes = {
  product: productType.isRequired
};

BigProduct.propTypes = {
  product: productType.isRequired
};

SmallProduct.propTypes = {
  product: productType.isRequired
};
```

non passare props con oggetti quanto puoi passsare primitive, sono più facili i controlli di diff
```javascript
PropTypes.shape({
  name: string.isRequired,
  surname: string.isRequired,
})
```
```javascript
  name: string.isRequired,
  surname: string.isRequired,

```
