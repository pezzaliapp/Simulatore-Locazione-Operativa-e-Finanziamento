# SLOF — Simulatore Locazione Operativa e Finanziamento

> **PWA professionale per la simulazione di Noleggio Operativo e Finanziamento Finalizzato**  
> Progettata per agenti e venditori convenzionati BCC Rent&Lease S.p.A.

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![PWA](https://img.shields.io/badge/PWA-Installabile-00b894)](https://pezzaliapp.com)
[![Autore](https://img.shields.io/badge/Autore-Alessandro%20Pezzali-6c5ce7)](https://pezzaliapp.com)

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
- Coefficienti BCC Rent&Lease aggiornati ad **aprile 2026**
- Rilevamento automatico fascia importo e spese contratto
- Checklist documenti dinamica (soglie €15.000 / €30.000 / €50.000)

### 💳 Simulatore Finanziamento Finalizzato
- Calcolo rata mensile
- Durate: 12 / 18 / 24 / 36 / 48 / 60 mesi
- Coefficienti BCC aggiornati a **ottobre 2025**
- Importo: €2.000–€50.000 IVA inclusa
- Checklist documenti dinamica (soglie €15.000 / €30.000)

### 📄 Gestione Documenti
- Lista completa di tutti i documenti richiesti per ogni prodotto
- Upload PDF dal dispositivo (salvato localmente)
- Visualizzazione in-app dei PDF caricati
- Sostituzione documenti in qualsiasi momento

### 📤 Condivisione Risultati
- **WhatsApp**: report formattato pronto da inviare al cliente
- **TXT**: file di testo scaricabile per archiviazione
- **Copia**: testo negli appunti per incollarlo ovunque

### ⚙️ Impostazioni Coefficienti
- Tabelle editabili per tutti i coefficienti (Noleggio Mensile, Trimestrale, Finanziamento)
- Gestione spese contratto per fascia
- Salvataggio locale su localStorage
- Reset ai valori originali con un tap

### 🔄 Auto-aggiornamento
- Service Worker con strategia **network-first**
- Aggiornamento automatico alla nuova versione senza azione manuale
- Banner notifica quando è disponibile un aggiornamento

---

## 🗂️ Struttura del progetto

```
Simulatore-Locazione-Operativa-e-Finanziamento/
├── index.html          # Applicazione completa (single-file)
├── sw.js               # Service Worker (auto-update)
├── manifest.json       # Configurazione PWA
├── icon-180.png        # Icona iOS (apple-touch-icon)
├── icon-192.png        # Icona Android / PWA
├── icon-512.png        # Icona splash / store
├── splash-*.png        # Splash screen per tutti i dispositivi iOS
└── README.md           # Questa documentazione
```

---

## 🚀 Deploy su GitHub Pages (gratis)

```bash
# 1. Crea il repository su github.com con il nome:
#    Simulatore-Locazione-Operativa-e-Finanziamento

# 2. Carica tutti i file nella root del branch main

# 3. Vai in: Settings → Pages → Source: "Deploy from branch" → main → / (root)

# 4. L'app sarà disponibile a:
#    https://[tuousername].github.io/Simulatore-Locazione-Operativa-e-Finanziamento/
```

### Aggiornare l'app
Per ogni aggiornamento (nuovi coefficienti, funzionalità, bug fix):
1. Incrementa `CACHE_VERSION` in `sw.js` (es. da `slof-v1.0.0` a `slof-v1.0.1`)
2. Esegui il commit e push su GitHub
3. Tutti i dispositivi installatati riceveranno l'aggiornamento automaticamente

---

## 🔧 Coefficienti inclusi

### Noleggio Operativo — Canone Mensile (aprile 2026)
| Fascia importo | 12 m | 18 m | 24 m | 36 m | 48 m | 60 m |
|---|---|---|---|---|---|---|
| ≤ 5.000 € | 8.2439% | 5.9311% | 4.6504% | 3.3168% | 2.6190% | 2.2041% |
| ≤ 15.000 € | 8.2877% | 5.9535% | 4.6604% | 3.3134% | 2.6076% | 2.1877% |
| ≤ 25.000 € | 8.2722% | 5.9386% | 4.6458% | 3.2988% | 2.5928% | 2.1725% |
| ≤ 50.000 € | 8.2206% | 5.8894% | 4.5973% | 3.2505% | 2.5436% | 2.1223% |
| ≤ 100.000 € | 8.1133% | 5.8065% | 4.5278% | 3.1946% | 2.4944% | 2.0769% |
| > 100.000 € | 8.0166% | 5.7338% | 4.4682% | 3.1485% | 2.4553% | 2.0418% |

> Coefficienti trimestrali e tabella finanziamento inclusi nell'app.

---

## ⚠️ Avviso Legale — Limitazione di Responsabilità

**Strumento indicativo.** SLOF è un simulatore a uso interno con finalità esclusivamente
informative. I risultati prodotti **non costituiscono offerta contrattuale, consulenza
finanziaria o impegno di alcun tipo** da parte dell'autore o di BCC Rent&Lease S.p.A.

**Limitazione di responsabilità dell'autore.** Alessandro Pezzali — PezzaliApp declina
ogni responsabilità per:
- errori od omissioni nei coefficienti inseriti
- variazioni successive delle condizioni da parte dell'istituto finanziatore
- decisioni commerciali o finanziarie prese sulla base dei calcoli dell'app
- imprecisioni derivanti dall'implementazione algoritmica
- contributi generati tramite intelligenza artificiale nel processo di sviluppo

I valori ufficiali e vincolanti sono **esclusivamente quelli comunicati da BCC Rent&Lease S.p.A.**
mediante documentazione contrattuale ufficiale.

**Coefficienti a titolo di esempio.** I coefficienti precaricati nell'applicazione sono
forniti **esclusivamente a titolo di esempio operativo**. Ogni azienda, agente o utente
può disporre di condizioni, accordi e coefficienti propri, negoziati direttamente con
l'istituto finanziatore, che possono differire significativamente da quelli inseriti
per default. L'utente è responsabile dell'aggiornamento dei coefficienti nella sezione
Impostazioni con i valori reali del proprio accordo commerciale.

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
📦 Parte del progetto open source **PezzaliApp**

---

*SLOF è un progetto indipendente di Alessandro Pezzali — PezzaliApp,  
non affiliato ufficialmente con BCC Rent&Lease S.p.A. o Gruppo BCC Iccrea.*
