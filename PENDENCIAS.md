# Pendências e Informações para Confirmação com o Instituto Pró-Vida

Este documento consolida as pendências e informações que dependem de validação direta da direção ou recepção da clínica, visando manter a apresentação sempre conservadora e fidedigna.

---

### 1. Domínio Oficial Definitivo
- **Situação:** O site em produção auditado está hospedado em `https://provida-orpin.vercel.app/`, enquanto os metadados anteriores apontavam para `https://institutoprovidarp.com.br/`.
- **Ação adotada:** Centralizado em [src/config/site.ts](file:///d:/DOWNLOAD/schedule-buddy-app-65-main/LANDING%20PAGE%20INSTITUTO%20PRO-VIDA/src/config/site.ts) como `OFFICIAL_URL_CANDIDATE = 'https://institutoprovidarp.com.br'`, com suporte à variável `VITE_SITE_URL` e canonical configurado.
- **Pendência:** Confirmar se o domínio próprio já está registrado e apontado para a hospedagem antes de publicar a versão final.

---

### 2. Validação Oficial do Catálogo de Atendimentos
- **Situação:** O catálogo reunia 16 serviços originais e 27 profissionais. Nem todas as especialidades do corpo clínico possuíam serviço correspondente e vice-versa.
- **Ação adotada:** Unificamos o catálogo em [src/data/catalog.ts](file:///d:/DOWNLOAD/schedule-buddy-app-65-main/LANDING%20PAGE%20INSTITUTO%20PRO-VIDA/src/data/catalog.ts) com relações explícitas. Serviços derivados das especialidades do corpo clínico foram adicionados (`Cardiologia`, `Clínica Geral`, `Endocrinologia`, `Reumatologia`, `Otorrinolaringologia`, `Geriatria`, `Endoscopia Digestiva`, `Psicologia`, `Psicopedagogia`), mantendo o aviso conservador de confirmação com a recepção enquanto `FEATURES.catalogConfirmed = false`.
- **Pendência:** Confirmar se todos os 25 serviços listados devem permanecer ativos no site ou se há outros exames laboratoriais/gráficos a incluir.

---

### 3. Exames Cardiológicos vs. Consulta
- **Situação:** Dr. João Carlos Pena é cardiologista, mas não havia lista formal dos exames cardiológicos oferecidos (ex: ECG, Holter, MAPA, Ecocardiograma).
- **Ação adotada:** Mantivemos "Cardiologia" (consulta médica) e "Exames cardiológicos" separados, com nota informando que a realização e preparo de exames devem ser confirmados com a recepção.
- **Pendência:** Confirmar quais exames cardiológicos o Instituto Pró-Vida realiza localmente e quais profissionais os laudam.

---

### 4. Horários de Atendimento da Recepção e Coleta
- **Situação:** O projeto não continha horários de abertura e fechamento da clínica nem da coleta laboratorial.
- **Ação adotada:** Apresentação conservadora no FAQ e seção de contato indicando atendimento pelo WhatsApp em dias úteis e agendamento prévio. Não inventamos horários nem preenchemos horários fictícios no schema JSON-LD.
- **Pendência:** Obter a tabela de horários de funcionamento presencial da recepção e turnos de atendimento.

---

### 5. Convênios e Formas de Pagamento
- **Situação:** O site não trazia lista de convênios médicos, odontológicos ou planos de saúde credenciados, nem as formas de pagamento aceitas.
- **Ação adotada:** Orientação no FAQ e contato para que o paciente consulte a recepção diretamente no WhatsApp.
- **Pendência:** Caso haja convênios parceiros (ex.: Unimed, Cassi, Bradesco Saúde, planos odontológicos), fornecer a lista oficial para inclusão no site.

---

### 6. Registros Profissionais (CRM, CRO, CREFITO, etc.)
- **Situação:** Apenas Dr. Alexandre Morais, Dra. Mariana Gonçalves e Breno Oliveira Silva possuíam número de registro anotado nos dados originais.
- **Ação adotada:** Mantivemos os registros confirmados sem inventar registros para os demais profissionais.
- **Pendência:** Coletar os números de CRM/RQE/CRO/CRP/CRN dos demais 24 profissionais para exibição padronizada nos cartões.

---

### 7. Avaliações e Depoimentos de Pacientes
- **Situação:** A seção anterior exibia classificação 5 estrelas e depoimento genérico de avaliação de interface.
- **Ação adotada:** Seção e estrelas foram ocultadas (`FEATURES.showReviews = false`), preservando a estrutura de código em [src/components/ReviewsSection.tsx](file:///d:/DOWNLOAD/schedule-buddy-app-65-main/LANDING%20PAGE%20INSTITUTO%20PRO-VIDA/src/components/ReviewsSection.tsx) para quando houver avaliações reais e autorizadas no Google Meu Negócio.
- **Pendência:** Enviar link do perfil do Google Meu Negócio ou depoimentos reais autorizados para ativação da seção.
