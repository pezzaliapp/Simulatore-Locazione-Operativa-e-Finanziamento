# SLOF — Simulatore Locazione Operativa e Finanziamento

> **PWA professionale per la simulazione di Noleggio Operativo e Finanziamento Finalizzato**  
> Parte del ramo AI sperimentale di **PezzaliApp** — by Alessandro Pezzali

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![PWA](https://img.shields.io/badge/PWA-Installabile-00b894)](https://pezzaliapp.com)
[![Autore](https://img.shields.io/badge/Autore-Alessandro%20Pezzali-6c5ce7)](https://pezzaliapp.com)
[![AI Branch](https://img.shields.io/badge/PezzaliApp-AI%20Branch-4fc3f7)](https://pezzaliapp.com)

---

## 📱 Installazione su smartphone

### iOS (iPhone / iPad)
1. Apri l'URL dell'app in **Safari** (obbligatorio, non Chrome)
2. Tocca il pulsante **Condividi** (□↑)
3. Seleziona **"Aggiungi a schermata Home"**
4. L'app si installa come app nativa con icona e splash screen dedicati

### Android
1. Apri l'URL in **Chrome**
2. Il browser mostrerà automaticamente il banner di installazione, oppure
3. Tocca i tre punti (⋮) → **"Installa app"** o **"Aggiungi a schermata Home"**

---

## ✨ Funzionalità

### 🏢 Simulatore Noleggio Operativo
- Calcolo canone **mensile** o **trimestrale**
- Durate: 12 / 18 / 24 / 36 / 48 / 60 mesi
- Coefficienti precaricati **a titolo di esempio operativo** — aggiornabili dall'app
- Rilevamento automatico fascia importo e spese contratto
- Checklist documenti dinamica (soglie €15.000 / €30.000 / €50.000)

### 💳 Simulatore Finanziamento Finalizzato
- Calcolo rata mensile
- Durate: 12 / 18 / 24 / 36 / 48 / 60 mesi
- Coefficienti precaricati **a titolo di esempio operativo** — aggiornabili dall'app
- Importo: €2.000–€50.000 IVA inclusa
- Checklist documenti dinamica (soglie €15.000 / €30.000)

### 📄 Gestione Documenti
- Lista completa documenti richiesti per ogni prodotto (obbligatori e condizionali)
- Upload PDF dal dispositivo (salvato localmente, nessun server)
- Visualizzazione in-app dei PDF caricati
- Sostituzione documenti in qualsiasi momento

### 📤 Condivisione Risultati
- **WhatsApp**: report formattato pronto da inviare al cliente
- **TXT**: file di testo scaricabile per archiviazione
- **Copia**: testo negli appunti per incollarlo ovunque

### ⚙️ Impostazioni & Coefficienti
- Tabelle editabili per tutti i coefficienti (Noleggio Mensile, Trimestrale, Finanziamento)
- Gestione spese & oneri per fascia (contratto, RIBA, riscatto, istruttoria, assicurazione)
- Salvataggio locale su localStorage — nessun dato inviato a server
- Reset ai valori di default con un tap

### 📥 Importa / Esporta Coefficienti
- **Importa da Excel (.xlsx) o CSV (.csv)** con mapping manuale foglio→categoria
- Auto-detection categoria basata su nome foglio e struttura colonne
- Anteprima dati prima della conferma dell'importazione
- **Esporta** i coefficienti attuali come Excel o CSV per modifica e re-import

### 🔄 Auto-aggiornamento
- Service Worker con strategia **network-first**
- Aggiornamento automatico senza cancellare cache manualmente
- Banner notifica quando è disponibile un aggiornamento

---

## 🗂️ Struttura del progetto

```
Simulatore-Locazione-Operativa-e-Finanziamento/
├── index.html          # Applicazione completa (single-file, ~1.2 MB con GIF embed)
├── sw.js               # Service Worker (auto-update, network-first)
├── manifest.json       # Configurazione PWA
├── icon-180.png        # Icona iOS (apple-touch-icon 180×180)
├── icon-192.png        # Icona Android / PWA (192×192)
├── icon-512.png        # Icona splash / maskable (512×512)
├── splash-*.png        # Splash screen per tutti i dispositivi iOS
└── README.md           # Questa documentazione
```

---

## 🚀 Deploy su GitHub Pages (gratuito)

```bash
# 1. Crea il repository su github.com:
#    Simulatore-Locazione-Operativa-e-Finanziamento

# 2. Carica tutti i file nella root del branch main

# 3. Settings → Pages → Source: "Deploy from branch" → main → / (root)

# 4. L'app sarà disponibile a:
#    https://[tuousername].github.io/Simulatore-Locazione-Operativa-e-Finanziamento/
```

### Aggiornare l'app
Per ogni aggiornamento (nuovi coefficienti, funzionalità, bug fix):
1. Modifica i file necessari
2. Incrementa `CACHE_VERSION` in `sw.js` (es. `slof-v1.0.0` → `slof-v1.0.1`)
3. Esegui commit e push su GitHub
4. Tutti i dispositivi installati ricevono l'aggiornamento automaticamente

---

## 📥 Flusso di aggiornamento coefficienti

```
App → "Importa" → Esporta Excel attuale
    → Apri in Excel / Numbers / Google Sheets
    → Modifica con i tuoi valori reali
    → Salva → Reimporta nell'app
    → Assegna ogni foglio alla categoria
    → Anteprima → Conferma
    → Salvato in localStorage ✅
```

---

## ⚠️ Avviso Legale — Limitazione di Responsabilità

**Strumento indicativo.** SLOF è un simulatore a uso interno con finalità esclusivamente
informative. I risultati prodotti **non costituiscono offerta contrattuale, consulenza
finanziaria o impegno di alcun tipo** da parte dell'autore.

**Coefficienti a titolo di esempio.** I coefficienti precaricati nell'applicazione sono
forniti **esclusivamente a titolo di esempio operativo**. Ogni azienda, agente o utente
può disporre di condizioni, accordi e coefficienti propri, negoziati direttamente con
il proprio istituto finanziatore, che possono differire significativamente da quelli
inseriti per default. L'utente è **responsabile esclusivo** dell'aggiornamento dei
coefficienti con i valori reali del proprio accordo commerciale.

**Limitazione di responsabilità.** Alessandro Pezzali — PezzaliApp declina ogni
responsabilità per: errori nei coefficienti, scostamenti rispetto agli accordi individuali,
decisioni commerciali prese sulla base dei calcoli dell'app, imprecisioni derivanti
dall'implementazione algoritmica o da contributi generati tramite intelligenza artificiale
nel processo di sviluppo. I valori ufficiali e vincolanti sono esclusivamente quelli
del proprio contratto con l'istituto finanziatore.

---

## 📄 Licenza MIT

```
MIT License

Copyright (c) 2026 Alessandro Pezzali — PezzaliApp (pezzaliapp.com)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 👤 Autore

**Alessandro Pezzali**  
🌐 [pezzaliapp.com](https://pezzaliapp.com) · [alessandropezzali.it](https://alessandropezzali.it)  
🐙 [github.com/PezzaliStack](https://github.com/PezzaliStack)  
📦 Parte del ramo AI sperimentale open source **PezzaliApp**

---

*SLOF è un progetto indipendente di Alessandro Pezzali — PezzaliApp.*  
*Non affiliato con alcun istituto finanziatore.*
