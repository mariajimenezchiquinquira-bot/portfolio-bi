# Contexto del proyecto — Portafolio de María José Jiménez

Este archivo resume la estructura del proyecto y los cambios hechos con ayuda de Claude, para tener contexto rápido en futuras sesiones.

## Datos generales

- Proyecto: React + Vite (`data-portfolio-studio`)
- Ubicación: `C:\Users\alura\Downloads\Claude\PortfolioHTML\data-portfolio-studio`
- Repositorio: `github.com/mariajimenezchiquinquira-bot/data-portfolio-studio`, rama `main`
- Todo el contenido del portafolio vive en `src/routes/index.tsx`
- Las imágenes de los proyectos están en `src/assets/projects/`

## Flujo de deployment (confirmado)

El sitio en vivo (https://maria-jose-jimenez.vercel.app/) está desplegado en **Vercel**, y el proyecto de Vercel SÍ está conectado directamente al repositorio de GitHub (`mariajimenezchiquinquira-bot/data-portfolio-studio`, verificado en Vercel > Project Settings > Git > "Connected Git Repository").

Esto significa que el deployment es automático: no hace falta ningún paso adicional en Vercel ni ningún comando de despliegue manual. Basta con:

```
cd "C:\Users\alura\Downloads\Claude\PortfolioHTML\data-portfolio-studio"
git add -A
git commit -m "mensaje descriptivo"
git push origin main
```

Al hacer push a `main`, Vercel detecta el commit y publica el nuevo build solo, normalmente en uno o dos minutos. Si después de un push no se ven los cambios en el navegador, probablemente es caché del navegador — recargar con Ctrl+Shift+R (recarga forzada) antes de asumir que el deployment falló.

## Cambios realizados hasta ahora

### Customer Segmentation for Credit Card Clients
- El botón "Notebook" apunta a `public/notebook-segmentacion-clientes.html` (antes era un PDF alojado en Google Drive, luego un PDF local, y finalmente se cambió a un archivo HTML).
- El bloque "Solution" se renombró a "Approach".

### Zippto — Custom Flashcards
- Texto del bloque "Result" actualizado a: *"a custom UI, and intuitive study flows — demonstrating a complete product build from UI/UX design to deployment."*
- Imágenes `zippto-flashcard-front.png` y `zippto-flashcard-back.png` reemplazadas por capturas nuevas de la app (mismo nombre de archivo, contenido actualizado).

### Premium Tool Request Automation (Power Automate)
Imágenes usadas en `src/assets/projects/`:
- `formulario.png`
- `power-automate-flow.png`
- `power-automate-email-detail.png`
- `power-automate-email-confirmation.png`
- `power-automate-email-approved.png`

Layout de la galería (personalizado, no usa el componente `ProjectImageGrid` estándar):
- `power-automate-flow.png` grande, a la izquierda, ocupando 2 filas.
- A la derecha: `formulario.png` (fila 1) y `power-automate-email-detail.png` (fila 2).
- Fila 3: `power-automate-email-approved.png` (izquierda) y `power-automate-email-confirmation.png` (derecha).

### Botón LinkedIn (header)
- Antes tenía `href="#"`. Ahora apunta a `https://www.linkedin.com/in/mariajosejimenez-ingenieraindustrial/` con `target="_blank"`.
- El botón de LinkedIn del footer ya estaba correcto desde antes.

### Zippto — orden de imágenes en la segunda fila (sesión posterior)
- La galería usa el componente estándar `ProjectImageGrid` (grid de 2 columnas, en el orden del array `images`).
- Se intercambió el orden de las imágenes 3 y 4 del array para que en la segunda fila `zipptoBack` ("flashcard back side") quede a la izquierda y `zipptoFront` ("flashcard front side") quede a la derecha.

### Premium Tool Request Automation — imagen reemplazada (sesión posterior)
- Se reemplazó el contenido del archivo `src/assets/projects/power-automate-email-detail.png` por una captura nueva enviada por el usuario (mismo nombre de archivo, no hubo que tocar el código).

### Limpieza de archivos no usados
- En la misma sesión también se eliminaron del repo (ya no estaban en uso): `public/notebook-segmentacion-clientes.pdf`, `src/assets/projects/n8n-flow.png`, `src/assets/projects/n8n-information-extractor.png`.

### Customer Churn & Capital Loss Analysis — imagen más grande y reorden de skills (sesión posterior)
- La imagen del dashboard de Power BI en esta sección se agrandó (clase `max-w-xl` → `max-w-3xl` en `src/routes/index.tsx`).
- Se reordenó el array `SKILLS` en `src/routes/index.tsx` según el siguiente orden solicitado: Business Intelligence, Business Analysis, Data Analysis, Generative AI, Financial Analysis, Python, SQL, Power BI, N8N, Power Automate, Excel, Claude Code, Process Improvement, Automation, Digital Product Development, Agile Methodologies.
- Nota: durante el push de estos cambios se encontraron archivos de bloqueo de git colgados (`.git/index.lock`, `.git/HEAD.lock`, `.git/objects/maintenance.lock`), probablemente por tener otro programa (VS Code, GitHub Desktop, etc.) tocando el repo al mismo tiempo. Se eliminaron manualmente para poder completar el commit/push. Si vuelve a pasar, cerrar otros programas que usen el repo antes de correr git.

## Pendiente / notas de seguridad

- El remote de git (`git remote -v`) tiene un token de GitHub incrustado en la URL. Se recomienda rotarlo/reemplazarlo por seguridad cuando el usuario tenga oportunidad.

## ⚠️ IMPORTANTE: hay 3 proyectos/portafolios distintos, no uno solo

Existen 3 carpetas/repositorios separados en `C:\Users\alura\Downloads\Claude\PortfolioHTML\`, cada uno con su propio sitio en Vercel:

| Carpeta | Repo GitHub | URL en vivo |
|---|---|---|
| `portfolio-product` | `data-portfolio-studio` | (portafolio "producto/completo", 5 proyectos) |
| `portfolio-bi` | `portfolio-bi` | https://portfolio-bi-iota.vercel.app/ |
| `portfolio-data-analysis` | `portfolio-data-analysis` | https://portfolio-data-analysis-silk.vercel.app/ |

**Antes de hacer un cambio hay que preguntar o confirmar en cuál(es) de los 3 aplica**, porque tienen contenido parecido pero no idéntico (por ejemplo, "Nu Split — Shared Payments Feature" solo existe en `portfolio-bi` y `portfolio-product`, no en `portfolio-data-analysis`). Si el usuario menciona una sección sin decir el sitio, buscar en los 3 antes de asumir cuál es. Un cambio pedido para "el portafolio" casi siempre debe aplicarse en los 3 si la sección existe en los 3, y avisar explícitamente en cuáles se aplicó.

## Convenciones sobre imágenes en las galerías de proyectos (`ProjectImageGrid`)

Componente en `src/components/portfolio/ImagePlaceholder.tsx`. Preferencia confirmada del usuario:

- **NO** usar un marco forzado tipo `aspect-[4/3]` con `object-contain` — eso recorta/reduce imágenes con proporciones distintas a 4:3 y dejaba espacio vacío alrededor (se notaba como "fondo gris" o "espacio en blanco" según el color de fondo del marco).
- **SÍ** usar el estilo de `portfolio-product` (la versión correcta, ya replicada en los 3 proyectos): el `<a>` contenedor SIN `aspect-*` fijo, y la imagen con `className="max-h-[420px] w-auto max-w-full object-contain ..."` — así cada imagen respeta su proporción natural y no queda espacio sobrante.
- El fondo de la tarjeta/marco de imagen debe ser blanco (`bg-white`), no gris (antes era `bg-card-foreground/[0.03]`, que se veía como un gris clarito indeseado).
- Cuando varias imágenes de una misma fila/sección deben verse "del mismo tamaño" entre sí (ej. las 6 gráficas de "Customer Segmentation"), la forma correcta es generar/exportar esas imágenes ya con las mismas dimensiones en píxeles (mismo ancho×alto) ANTES de subirlas — no forzar un marco CSS parejo, porque eso recorta o dejaba espacio vacío según la proporción de cada imagen.

## Sección "Customer Segmentation for Credit Card Clients" — origen de las imágenes

- Las 6 gráficas de esta sección (Elbow Method, Dominant Merchant Category, Average Transaction Amount, Most Used Card Franchise, Domestic vs. International Spending, Spending by Day of Week) se generan con matplotlib/seaborn desde el notebook de Jupyter `ConsumoTarjetasCredito.ipynb` (Google Colab), que lee el archivo `infoclientebanca_en.xlsx`. El usuario tiene ambos archivos y los puede volver a compartir si hace falta regenerar las gráficas.
- Las imágenes finales usadas en el sitio están en `src/assets/projects/` con nombres `segmentation-*.png` (ej. `segmentation-5-elbow-method.png`).
- El botón "Notebook" de esta sección apunta a un archivo HTML exportado del mismo notebook (`ConsumoTarjetasCredito.html` en `portfolio-bi`/`portfolio-data-analysis`, o `notebook-segmentacion-clientes.html` en `portfolio-product` — el nombre varía por proyecto).
- Para que las 6 gráficas del notebook no tuvieran fondo gris y quedaran del mismo tamaño, se les agregó `facecolor='white'` y se unificó `figsize=(6, 4)` en el código del notebook antes de re-ejecutarlo y volver a exportar tanto las imágenes PNG como el HTML.

## Flujo de deployment — aplica igual en los 3 proyectos

Mismo flujo que ya estaba documentado: `git add -A`, `git commit`, `git push origin main` desde la carpeta del proyecto correspondiente. Vercel despliega solo tras el push (1-2 min). Si el usuario no ve cambios, recordarle recargar con Ctrl+Shift+R antes de asumir que el deploy falló, y verificar en Vercel > Deployments que el commit correcto quedó en Production.

Nota técnica: al hacer `git commit`/`add` desde el bridge remoto a veces quedan archivos de lock (`.git/HEAD.lock`, `.git/index.lock`) que no se pueden borrar por permisos — si pasa, pedir permiso de borrado (`device_request_delete_permission`) sobre la carpeta `PortfolioHTML` y luego eliminar los `.lock` antes de reintentar el commit.

## Secciones WeWork y Bud Light (business case studies) — agregadas en `portfolio-bi`

Se agregaron dos `ProjectCard` nuevas al inicio de la sección de proyectos de `portfolio-bi` (antes de los proyectos técnicos), siguiendo la recomendación del profesor de la usuaria de incluir casos de negocio de estrategia/entendimiento del negocio, no solo análisis técnico:

- **WeWork: Strategic Collapse of a $47B Business Model** — colapso del modelo de negocio de WeWork (2019 IPO fallido → quiebra 2023).
- **Bud Light / AB InBev: The Cost of a Marketing Decision** — crisis de marca de Bud Light en 2023 y su impacto en ventas/market share.

Ambas usan tags `["Business Case", "Strategy Analysis", "Business Understanding"]` y bloques `Problem` / `Approach` / `Result` como el resto del portafolio. Se quitaron las secciones "Nu Split — Shared Payments Feature", "Vehicle Contract Automation" y "Customer Segmentation for Credit Card Clients" de `portfolio-bi` para dejar solo: WeWork, Bud Light, Customer Churn & Capital Loss Analysis, Outline, UI Work.

### Imágenes/gráficas
Generadas con matplotlib replicando la paleta del portafolio (PURPLE `#8B7FE8`, GOLD `#D4B106`, YELLOW `#F0D43A`), en `src/assets/projects/`:
- WeWork: `wework-valuation.png`, `wework-timeline.png`, `wework-losses-donut.png` (layout especial: grid `sm:grid-cols-[1.5fr_1fr_1fr]` en vez del `ProjectImageGrid` estándar, para que las 3 quepan en una fila con distinto ancho).
- Bud Light: `budlight-ranking.png`, `budlight-market-share.png`, `budlight-sales-volume.png` (usa `ProjectImageGrid` estándar de 3 columnas).
- El texto "boycott"/"boicot" se reemplazó por "brand crisis"/"crisis de marca" en la gráfica `budlight-sales-volume` (y en el texto del portafolio) porque no es un término universalmente conocido/entendido. El eje Y de esa gráfica se simplificó de "Sales Volume (Indexed, 100 = Pre-Crisis)" a "Sales Volume (%)" con barras en 100%/70%, sin el símbolo "~" ni el "(-30%)" al lado del número — se prefiere lo más limpio/directo posible en las etiquetas de gráficos.
- También existen versiones en español de las 6 gráficas (sufijo `_es`, generadas pero no necesariamente usadas todavía en el sitio — confirmar con la usuaria antes de reemplazar el set en inglés que sí está en producción).

### PDFs "View Full Analysis" (botón `DocsLink`)
Cada card tiene un botón que abre un PDF de análisis más profundo (3 páginas, formato consultoría):
- `public/docs/WeWork_Case_Study_Analysis.pdf` → botón en la card de WeWork.
- `public/docs/BudLight_Case_Study_Analysis.pdf` → botón en la card de Bud Light.
- El componente `DocsLink` (ícono `FileText`) ya existía en `ProjectCard.tsx`; se usó con `label="View Full Analysis"`.
- **Importante:** los PDFs deben tener metadatos de título correctos (`/Title`), si no el navegador muestra "(anonymous)" en la pestaña al abrirlos. Los PDFs generados con ReportLab traen `/Title: (anonymous)` por defecto — hay que sobreescribir el metadata con `pypdf` (`PdfWriter.add_metadata`) antes de subirlos.
- Preferencias de diseño de estos PDFs (estilo formal/académico, un solo color navy, sin mayúsculas sostenidas, captions "Figura N.", referencias APA, etc.) están guardadas en la memoria de la usuaria — ver `/topics/portafolio.md` en el sistema de memoria de Claude.

### Bud Light — retirada de portfolio-bi y reemplazada por Nu Split (sept 2026)
- Se quitó del array de proyectos de `portfolio-bi` la card "Bud Light / AB InBev: The Cost of a Marketing Decision" y se puso en su mismo lugar (entre WeWork y Customer Churn & Capital Loss Analysis) la card "Nu Split — Shared Payments Feature", copiada de `portfolio-product`. Se agregó el import de `TableauLink` (ya existía el componente en `ProjectCard.tsx`) y los 4 imports de imágenes `nusplit-*.png` (ya estaban presentes en `src/assets/projects/` de `portfolio-bi` de una sesión anterior, no hubo que copiarlas).
- El JSX completo de la card "Bud Light / AB InBev" quedó guardado en la memoria de Claude para poder reinsertarla más adelante en cualquiera de los 3 portafolios (Product, BI o Data Analysis), cuando la usuaria lo pida — igual que se hizo con "Premium Tool Request Automation".
- Las 3 imágenes originales de esa card (`budlight-ranking.png`, `budlight-market-share.png`, `budlight-sales-volume.png`) siguen intactas en `src/assets/projects/` de `portfolio-bi` — no se borraron.
- Para que una limpieza de "archivos no usados" no las elimine por error, se agregó en `src/routes/index.tsx` (antes de `const SKILLS`) un bloque marcado con el comentario `NO ELIMINAR` que mantiene esos 3 imports referenciados en una constante `RESERVED_BUDLIGHT_ASSETS` (con `void` para que no afecte el build ni se muestre en el sitio). Si se reinserta la card en Product o Data Analysis, esas 3 imágenes deben copiarse primero a la carpeta `assets/projects` de ese otro proyecto (no existen ahí todavía).

### ⚠️ Lección aprendida: archivos hardlinkeados en este proyecto
Varias veces `device_commit_files` reportó `"written"` exitosamente pero el archivo en el computador de la usuaria NO se actualizó (se quedó con el contenido viejo) — pasó tanto con PDFs como con `index.tsx`. La causa: los archivos están hardlinkeados (`nlink > 1`, probablemente por git o por OneDrive), y sobreescribir "in place" no siempre rompe el link correctamente sin `force: true`. **Protocolo a seguir de ahora en adelante:** después de cualquier `device_commit_files`, verificar con `device_stage_files` que el contenido nuevo realmente llegó (o pedirle a la usuaria que confirme con `git status` / abriendo el archivo) ANTES de decir que el cambio está listo — no asumir que "written" en la respuesta del tool significa que el archivo cambió de verdad.

## WeWork — actualización de contenido y corrección del build (sept 2026)

Cambios hechos exclusivamente en `portfolio-bi` (no se tocó `portfolio-bi-es` ni `portfolio-product` en esta sesión, aunque `portfolio-bi-es` recibió cambios equivalentes por separado):

### Texto y título
- Título cambiado de "WeWork: Strategic Collapse of a $47B Business Model" a **"WeWork — Business Case"**.
- Tags cambiados de `["Business Case", "Strategy Analysis", "Business Understanding"]` a `["Business Intelligence", "Business Strategy", "Financial Analysis"]`.
- Los tres `CardBlock` se reescribieron y renombraron: `Problem`, `Analysis` (antes `Approach`), `Insight` (antes `Result`), con texto nuevo centrado en "qué revelan los datos financieros sobre el riesgo de sostenibilidad del negocio" en vez del enfoque anterior en decisiones de gobernanza/Adam Neumann.

### Botón "View Full Analysis"
- Antes apuntaba a `public/docs/WeWork_Case_Study_Analysis.pdf`.
- Ahora apunta a `public/docs/WeWork_Case_Study_Analysis.html`, un análisis extendido en inglés (framework de 4 dimensiones, contexto, 3 hallazgos con gráficas SVG inline, decisiones corporativas, métricas operativas, respuesta operativa, conclusión y fuentes). El PDF viejo se dejó sin borrar en `public/docs/` por si se necesita.
- Ojo: al reemplazar el HTML hubo un primer intento fallido en el que quedó guardada por error la versión en **español** (mezclada desde otro portafolio hermano `portfolio-bi-es`) — se corrigió verificando el `<h1>` del archivo resultante antes de dar el cambio por bueno. Lección: siempre releer/verificar el archivo HTML después de un `device_commit_files` cuando hay dos idiomas circulando en la misma sesión.

### Imágenes
- Se reemplazaron las 3 imágenes separadas (`wework-timeline.png`, `wework-valuation.png`, `wework-losses-donut.png`, mostradas en grid `sm:grid-cols-[1.5fr_1fr_1fr]`) por una sola captura combinada: `wework-dashboard-overview.png` (dashboard con 4 gráficas: valoración, pasivos vs. patrimonio, ingresos vs. pérdida neta, y crecimiento operativo). Las 3 imágenes viejas se eliminaron del repo.
- Aquí también hubo un primer intento en el que, por error de este asistente, se subió la versión en **español** de esa misma captura (la que correspondía a `portfolio-bi-es`) en lugar de la versión en inglés — se detectó porque la usuaria lo señaló, y se corrigió releyendo el PNG resultante con la herramienta de lectura de imágenes antes de confirmar.

### Corrección de un build roto en Vercel (causa raíz encontrada)
- Un deploy anterior (commit que agregaba el proyecto "Payra Split") fallaba en Vercel con `Error: ENOENT: no such file or directory, open '.../payrasplit-*.png'` — las 4 imágenes de Payra Split (`payrasplit-jira-board.png`, `payrasplit-notion-cover.png`, `payrasplit-notion-timeline-backlog.png`, `payrasplit-tableau-dashboard.png`) estaban referenciadas en `index.tsx` pero nunca se habían agregado a git (quedaron como archivos "untracked" en la carpeta local). Se agregaron con `git add` en un commit separado y el build volvió a funcionar.
- Lección para el futuro: si un deploy falla con `ENOENT` sobre un asset, lo primero a revisar es `git status --short` en busca de archivos `??` (untracked) que el código ya está importando.


## Payra Split reemplazado por Segmentation — portfolio-bi ahora tiene WeWork, Segmentation, Churn (sept 2026)

A petición explícita de la usuaria: "quiero que portfolio-bi tenga estos tres proyectos: Churn, Segmentation y WeWork".

- Se eliminó por completo la card "Payra Split — Shared Payments Feature" de `src/routes/index.tsx`: el JSX de la card, sus 4 imports de imágenes, y el import de `TableauLink` (que solo se usaba ahí). A diferencia de otros retiros anteriores (Bud Light, Premium Tool Request Automation), la usuaria pidió explícitamente **no** guardarla en reserva — se eliminó también físicamente del disco: `payrasplit-jira-board.png`, `payrasplit-notion-cover.png`, `payrasplit-notion-timeline-backlog.png`, `payrasplit-tableau-dashboard.png` (borradas de `src/assets/projects/`).
- Se agregó en su lugar la card "Segmentation — Cardholders by Spending Behavior" (Python, SQL, Scikit-learn, K-means), copiando texto e imágenes desde `portfolio-data-analysis`. Usa el componente `ActionLink` (con ícono `FileText` de lucide-react) para el botón "Notebook", que apunta a `/ConsumoTarjetasCredito.html` (ese HTML ya existía en `public/` de `portfolio-bi` de una sesión anterior, no hubo que copiarlo).
- Las 6 imágenes de la sección (`segmentation-5-elbow-method.png`, `segmentation-4-dominant-category.png`, `segmentation-6-avg-transaction-by-cluster.png`, `segmentation-card-franchise.png`, `segmentation-2-domestic-vs-international.png`, `segmentation-weekday-heatmap.png`) ya estaban trackeadas en git en `src/assets/projects/` desde un intento anterior (no se mostraban en la página, pero el archivo físico y el registro en git ya existían) — se reutilizaron tal cual.
- Orden final de proyectos en `portfolio-bi`: **WeWork — Business Case**, **Segmentation — Cardholders by Spending Behavior**, **Customer Churn & Capital Loss Analysis**.
- El proyecto "Customer Churn & Capital Loss Analysis" de `portfolio-bi` sigue siendo su propia versión de texto (distinta a la de `portfolio-data-analysis`) — no se tocó en este cambio.
- Commit: `ced2856` — "Replace Payra Split with Segmentation project". Pendiente `git push` por parte de la usuaria.
