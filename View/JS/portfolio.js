const GITHUB_USER = "DaviTaiyo";
const EMAIL = "daviepaulino@hotmail.com";

const dictionary = {
  pt: {
    nav: { about: "Sobre", skills: "Skills", projects: "Projetos", experience: "Experiência", content: "Conteúdos", contact: "Contato" },
    hero: {
      kicker: "QA Automation • Docente SENAC • Dev",
      title: "Eu entrego qualidade com automação e engenharia prática.",
      lead: "Testes automatizados, documentação, padrões e consistência. Meu foco é construir soluções confiáveis em produto, processo e ensino.",
      projectsButton: "Ver projetos"
    },
    profile: {
      role: "QA Automation • Docente • Dev",
      available: "Disponível para projetos",
      cases: "Ver cases",
      meta: [["Base", "São Paulo, BR"], ["Foco", "Qualidade + Ensino"], ["Stack", "Java • C# • QA"]]
    },
    about: {
      title: "Sobre",
      subtitle: "Um resumo direto do que eu faço e como eu penso.",
      cards: [
        {
          title: "Quem eu sou",
          paragraphs: [
            "Sou QA Automation e docente. Gosto de processos claros, automação bem estruturada e soluções que aguentam o mundo real: prazos, mudanças e bugs teimosos.",
            "Valorizo legibilidade, manutenção, rastreabilidade e testes que realmente protegem o produto."
          ]
        },
        {
          title: "Atualmente",
          list: [
            "Automatizando testes com POM/BDD e melhorando a confiabilidade dos fluxos.",
            "Criando materiais e projetos práticos para alunos no SENAC.",
            "Evoluindo projetos públicos com README, organização e demonstração."
          ],
          note: "Buscando crescer como QA/SDET, fortalecer CI/CD e consolidar projetos públicos."
        }
      ]
    },
    skills: {
      title: "Skills",
      subtitle: "Organizado por áreas, com foco em leitura rápida para recrutadores e times técnicos.",
      inline: ["Selenium", "Cucumber", "JUnit", "Java", "C#", "API Testing", "CI/CD"],
      groups: [
        ["QA Automation", "Estrutura, clareza e estabilidade.", ["Selenium", "Cucumber", "JUnit", "POM", "BDD", "DataTable"]],
        ["Back-end & Dados", "Pensando em logs, rastreio e qualidade no servidor.", ["C#", "APIs", "SQL", "Logs", "CRUD"]],
        ["Ferramentas", "Rotina profissional, versionamento e entrega.", ["Git", "CI/CD", "Jira", "Postman", "Linux"]]
      ]
    },
    projects: {
      title: "Projetos",
      subtitle: "Repositórios públicos do GitHub, com fallback local caso a API esteja indisponível.",
      allRepos: "Ver todos no GitHub",
      loading: "Carregando projetos do GitHub...",
      loaded: "Projetos públicos carregados",
      error: "Não consegui acessar a API agora; mostrando destaques locais.",
      repo: "Repo",
      demo: "Detalhes",
      updated: "Atualizado"
    },
    experience: {
      title: "Experiência",
      subtitle: "Linha do tempo estratégica, conectando QA Automation, ensino, desenvolvimento e suporte técnico.",
      items: [
        {
          when: "Jan 2025 - Atual",
          title: "Engenheiro de Qualidade de Software | QA Automation Engineer",
          company: "Spread Tecnologia - São Paulo, Brasil",
          description: "Atuação em sistemas corporativos com foco em testes Web, APIs REST, backend e fluxos críticos de negócio.",
          highlights: ["Automação com Java, Selenium WebDriver, RestAssured, Appium e BDD/Cucumber.", "Validação de APIs REST, integrações, regras de negócio e dados.", "Execução de regressão, smoke, end-to-end e apoio a fluxos de CI/CD.", "Análise de falhas, logs e evidências para apoiar produto e desenvolvimento."],
          tags: ["Java", "Selenium", "RestAssured", "Appium", "BDD/Cucumber", "CI/CD"]
        },
        {
          when: "Fev 2025 - Atual",
          title: "Docente de Programação | Programming Instructor",
          company: "Senac São Paulo - Fontanella, SP",
          description: "Condução de aulas teóricas e práticas em lógica, desenvolvimento Web/Desktop e fundamentos de tecnologia.",
          highlights: ["Planejamento e condução de aulas com metodologias ativas.", "Orientação de projetos práticos conectados ao mercado de TI.", "Integração de fundamentos de QA e testes ao ciclo de desenvolvimento.", "Acompanhamento de alunos com foco em autonomia e resolução de problemas."],
          tags: ["Ensino", "Web", "Desktop", "Projetos", "QA"]
        },
        {
          when: "Mai 2023 - Mar 2024",
          title: "Analista de Qualidade de Software | Software QA Analyst",
          company: "Like Brands - Fontanella, SP",
          description: "Testes manuais para aplicações Web, backend e APIs, com foco em validação funcional e documentação de evidências.",
          highlights: ["Planejamento e execução de testes funcionais, exploratórios, regressão, integração, sistema e aceitação.", "Validação de telas, fluxos de negócio, endpoints e integrações backend.", "Registro de bugs com evidências claras, cenários de reprodução e informações técnicas.", "Participação em refinamentos, análise de riscos, retestes e priorização de correções."],
          tags: ["QA Manual", "APIs", "Regressão", "Backend", "Evidências"]
        },
        {
          when: "Mai 2023 - Jan 2024",
          title: "Analista de Qualidade e Desenvolvedor Mobile",
          company: "CIFAL Distribuidora - Fontanella, SP",
          description: "Atuação híbrida entre desenvolvimento mobile e qualidade de software em aplicações Flutter/Dart.",
          highlights: ["Desenvolvimento e manutenção de funcionalidades mobile com Flutter e Dart.", "Testes manuais em fluxos mobile, regras de negócio e cenários de erro.", "Documentação de evidências, bugs e resultados de testes.", "Colaboração em Scrum/Kanban com GitHub e Azure."],
          tags: ["Flutter", "Dart", "Mobile QA", "Scrum", "Azure"]
        },
        {
          when: "Ago 2022 - Jun 2023",
          title: "Desenvolvedor Mobile Flutter | Flutter Mobile Developer",
          company: "CIFAL Distribuidora - Fontanella, SP",
          description: "Construção de aplicações mobile desde levantamento de dados até publicação, com participação em qualidade e melhoria contínua.",
          highlights: ["Desenvolvimento mobile com acompanhamento de relatórios e resultados.", "Compartilhamento de ideias para resolução de problemas e evolução técnica.", "Execução de testes manuais e orientação de correções para melhorar a qualidade do software."],
          tags: ["Flutter", "Dart", "Mobile", "Clean Code", "QA"]
        },
        {
          when: "Fev 2022 - Jul 2022",
          title: "Desenvolvedor Front-end | Front-end Developer",
          company: "Mais Ingressos - Bebedouro, SP",
          description: "Desenvolvimento de projetos iniciais e estudos práticos para criação de software do zero.",
          highlights: ["Criação de interfaces e evolução de fundamentos de front-end.", "Aprendizado aplicado em projetos reais e estruturação de software."],
          tags: ["Front-end", "HTML", "CSS", "JavaScript"]
        },
        {
          when: "Fev 2021 - Jul 2021",
          title: "Analista de Suporte Técnico | IT Support Analyst",
          company: "Colégio Alpha - Viradouro, SP",
          description: "Suporte técnico a professores e manutenção de computadores em ambiente educacional.",
          highlights: ["Orientação no uso de computadores e resolução de problemas operacionais.", "Manutenção de equipamentos e apoio à continuidade das aulas."],
          tags: ["Suporte", "Hardware", "Educação"]
        },
        {
          when: "Fev 2018 - Mar 2020",
          title: "Analista de Suporte Técnico | IT Support Analyst",
          company: "Sigacred - Terra Roxa, SP",
          description: "Suporte técnico, manutenção de computadores e auxílio a trabalhadores e clientes no uso de sistemas.",
          highlights: ["Atendimento a usuários, diagnóstico de problemas e manutenção de equipamentos.", "Apoio operacional no uso de softwares corporativos."],
          tags: ["Suporte", "Sistemas", "Atendimento", "Manutenção"]
        }
      ]
    },
    content: {
      title: "Conteúdos",
      subtitle: "Aulas, guias e materiais para mostrar consistência pública.",
      cards: [
        ["Guias e aulas", "Conteúdos práticos sobre automação, JS, WinForms, qualidade e projetos completos.", "Ver materiais"],
        ["YouTube / Lives", "Espaço para cortes, vídeos e aulas focadas em aprender construindo.", "Abrir canal"],
        ["Repositórios", "Projetos organizados com README, prints e explicação das decisões.", "Abrir GitHub"]
      ]
    },
    contact: {
      title: "Contato",
      subtitle: "Bora conversar? Se for objetivo, eu respondo rápido.",
      name: "Seu nome",
      email: "Seu e-mail",
      subject: "Assunto",
      message: "Mensagem",
      send: "Enviar",
      direct: "Links diretos",
      directText: "Se preferir, me chama por aqui:",
      sent: "Abri seu cliente de email com a mensagem preenchida.",
      required: "Preencha nome, assunto e mensagem para eu montar o email.",
      fromLabel: "Enviado por"
    },
    fallback: []
  },
  en: {
    nav: { about: "About", skills: "Skills", projects: "Projects", experience: "Experience", content: "Content", contact: "Contact" },
    hero: {
      kicker: "QA Automation • SENAC Teacher • Developer",
      title: "I deliver quality through automation and practical engineering.",
      lead: "Automated tests, documentation, standards, and consistency. I focus on building reliable solutions across products, processes, and teaching.",
      projectsButton: "View projects"
    },
    profile: {
      role: "QA Automation • Teacher • Developer",
      available: "Available for projects",
      cases: "View cases",
      meta: [["Base", "São Paulo, BR"], ["Focus", "Quality + Teaching"], ["Stack", "Java • C# • QA"]]
    },
    about: {
      title: "About",
      subtitle: "A direct summary of what I do and how I think.",
      cards: [
        {
          title: "Who I am",
          paragraphs: [
            "I am a QA Automation professional and teacher. I like clear processes, well-structured automation, and solutions that survive real deadlines, changes, and stubborn bugs.",
            "I value readability, maintainability, traceability, and tests that truly protect the product."
          ]
        },
        {
          title: "Currently",
          list: [
            "Automating tests with POM/BDD and improving flow reliability.",
            "Creating practical materials and projects for SENAC students.",
            "Improving public projects with documentation, structure, and demos."
          ],
          note: "Looking to grow as QA/SDET, strengthen CI/CD, and consolidate public projects."
        }
      ]
    },
    skills: {
      title: "Skills",
      subtitle: "Grouped by area for fast reading by recruiters and technical teams.",
      inline: ["Selenium", "Cucumber", "JUnit", "Java", "C#", "API Testing", "CI/CD"],
      groups: [
        ["QA Automation", "Structure, clarity, and stability.", ["Selenium", "Cucumber", "JUnit", "POM", "BDD", "DataTable"]],
        ["Back-end & Data", "Thinking about logs, traceability, and server-side quality.", ["C#", "APIs", "SQL", "Logs", "CRUD"]],
        ["Tools", "Professional workflow, versioning, and delivery.", ["Git", "CI/CD", "Jira", "Postman", "Linux"]]
      ]
    },
    projects: {
      title: "Projects",
      subtitle: "Public GitHub repositories, with local fallback when the API is unavailable.",
      allRepos: "See all on GitHub",
      loading: "Loading GitHub projects...",
      loaded: "Public projects loaded",
      error: "I could not reach the API right now; showing local highlights.",
      repo: "Repo",
      demo: "Details",
      updated: "Updated"
    },
    experience: {
      title: "Experience",
      subtitle: "A focused timeline for QA, teaching, and development.",
      items: [
        ["2025 - Present", "QA Automation / Junior Tester", "Automation, validation, workflow improvement, standards, and traceability."],
        ["2024 - Present", "Teacher • SENAC", "Practical classes, guided projects, learning materials, and student support."],
        ["Projects", "Personal builds", "Apps, automation, materials, and experiments to improve products and portfolio."]
      ]
    },
    content: {
      title: "Content",
      subtitle: "Lessons, guides, and materials that show public consistency.",
      cards: [
        ["Guides and lessons", "Practical content about automation, JS, WinForms, quality, and complete projects.", "View materials"],
        ["YouTube / Live sessions", "Room for short videos and lessons focused on learning by building.", "Open channel"],
        ["Repositories", "Organized projects with README files, screenshots, and decision notes.", "Open GitHub"]
      ]
    },
    contact: {
      title: "Contact",
      subtitle: "Let's talk. Clear messages get quick answers.",
      name: "Your name",
      email: "Your email",
      subject: "Subject",
      message: "Message",
      send: "Send",
      direct: "Direct links",
      directText: "You can also reach me here:",
      sent: "I opened your email client with the message filled in.",
      required: "Fill in name, subject, and message so I can prepare the email.",
      fromLabel: "Sent by"
    },
    fallback: [
      ["POM/BDD Automation Framework", "Structure for automated tests with Page Objects, BDD, reuse, logs, and maintainability.", "Java", ["selenium", "cucumber", "junit", "qa"]],
      ["CRUD Request Logs", "Base for auditing and tracing successful requests in back-end applications.", "C#", ["api", "sql", "logs", "crud"]],
      ["Educational WinForms Project", "Practical teaching project with login, products, cart, payment, and local database flows.", "C#", ["winforms", "sqlite", "education"]]
    ]
  },
  ja: {
    nav: { about: "概要", skills: "スキル", projects: "プロジェクト", experience: "経験", content: "コンテンツ", contact: "連絡" },
    hero: {
      kicker: "QA自動化 • SENAC講師 • 開発者",
      title: "自動化と実践的なエンジニアリングで品質を届けます。",
      lead: "自動テスト、ドキュメント、標準化、一貫性。製品、プロセス、教育において信頼できる解決策を作ることに集中しています。",
      projectsButton: "プロジェクトを見る"
    },
    profile: {
      role: "QA自動化 • 講師 • 開発者",
      available: "プロジェクト相談可",
      cases: "事例を見る",
      meta: [["拠点", "São Paulo, BR"], ["注力", "品質 + 教育"], ["技術", "Java • C# • QA"]]
    },
    about: {
      title: "概要",
      subtitle: "私がしていること、そして大切にしている考え方です。",
      cards: [
        {
          title: "自己紹介",
          paragraphs: [
            "私はQA自動化エンジニアであり講師です。明確なプロセス、整理された自動化、現実の期限や変更に耐える解決策を大切にしています。",
            "読みやすさ、保守性、追跡性、そして製品を本当に守るテストを重視しています。"
          ]
        },
        {
          title: "現在",
          list: [
            "POM/BDDでテストを自動化し、フローの信頼性を高めています。",
            "SENACの学生向けに実践的な教材とプロジェクトを作っています。",
            "公開プロジェクトのREADME、構成、デモを改善しています。"
          ],
          note: "QA/SDETとして成長し、CI/CDを強化し、公開プロジェクトを磨いています。"
        }
      ]
    },
    skills: {
      title: "スキル",
      subtitle: "採用担当者と技術チームがすぐ読めるように分野別に整理しています。",
      inline: ["Selenium", "Cucumber", "JUnit", "Java", "C#", "API Testing", "CI/CD"],
      groups: [
        ["QA自動化", "構造、明確さ、安定性。", ["Selenium", "Cucumber", "JUnit", "POM", "BDD", "DataTable"]],
        ["バックエンド & データ", "ログ、追跡性、サーバー側の品質を意識します。", ["C#", "APIs", "SQL", "Logs", "CRUD"]],
        ["ツール", "プロの開発フロー、バージョン管理、継続的な提供。", ["Git", "CI/CD", "Jira", "Postman", "Linux"]]
      ]
    },
    projects: {
      title: "プロジェクト",
      subtitle: "GitHubの公開リポジトリを表示します。APIが使えない場合はローカルの注目プロジェクトを表示します。",
      allRepos: "GitHubですべて見る",
      loading: "GitHubプロジェクトを読み込み中...",
      loaded: "公開プロジェクトを読み込みました",
      error: "APIに接続できませんでした。ローカルの注目プロジェクトを表示します。",
      repo: "Repo",
      demo: "詳細",
      updated: "更新"
    },
    experience: {
      title: "経験",
      subtitle: "QA、教育、開発に関する要点をまとめたタイムラインです。",
      items: [
        ["2025 - 現在", "QA Automation / Tester Jr", "自動化、検証、フロー改善、標準化、追跡性。"],
        ["2024 - 現在", "講師 • SENAC", "実践的な授業、ガイド付きプロジェクト、教材作成、学生サポート。"],
        ["プロジェクト", "個人開発", "アプリ、自動化、教材、製品とポートフォリオ改善の実験。"]
      ]
    },
    content: {
      title: "コンテンツ",
      subtitle: "学習ガイド、教材、公開活動をまとめる場所です。",
      cards: [
        ["ガイドと授業", "自動化、JS、WinForms、品質、完成プロジェクトに関する実践的な内容。", "教材を見る"],
        ["YouTube / 配信", "作りながら学ぶための動画や授業を置く場所です。", "チャンネルを開く"],
        ["リポジトリ", "README、スクリーンショット、設計判断を整理したプロジェクト。", "GitHubを開く"]
      ]
    },
    contact: {
      title: "連絡",
      subtitle: "ご相談があれば、わかりやすく送ってください。",
      name: "お名前",
      email: "メール",
      subject: "件名",
      message: "メッセージ",
      send: "送信",
      direct: "直接リンク",
      directText: "こちらからも連絡できます:",
      sent: "メールアプリを開き、内容を入力しました。",
      required: "名前、件名、メッセージを入力してください。",
      fromLabel: "送信者"
    },
    fallback: [
      ["POM/BDD自動化フレームワーク", "Page Objects、BDD、再利用、ログ、保守性を意識した自動テスト構成です。", "Java", ["selenium", "cucumber", "junit", "qa"]],
      ["CRUDリクエストログ", "バックエンドアプリの成功リクエストを監査、追跡するためのベースです。", "C#", ["api", "sql", "logs", "crud"]],
      ["教育用WinFormsプロジェクト", "ログイン、商品、カート、支払い、ローカルDBを含む実践的な教材プロジェクトです。", "C#", ["winforms", "sqlite", "education"]]
    ]
  }
};

const lang = document.documentElement.dataset.lang || "pt";
const text = dictionary[lang] || dictionary.pt;
const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

const publicProjectFallback = [
  ["carrinho_de_compras", "Aula de carrinho de compras simples.", "JavaScript", "https://github.com/DaviTaiyo/carrinho_de_compras"],
  ["aulaJqueryCss", "Aula pequena sobre jQuery e design usando CSS.", "CSS", "https://github.com/DaviTaiyo/aulaJqueryCss"],
  ["DaviTaiyo", "Repositório de perfil do GitHub.", "Code", "https://github.com/DaviTaiyo/DaviTaiyo"],
  ["aula-sobre-Jquery", "Aula iniciada em 10/04/2026 para a TI38.", "CSS", "https://github.com/DaviTaiyo/aula-sobre-Jquery"],
  ["aulaDeAutenticacao", "Aula envolvendo registro e login com bcrypt para criptografia de senha.", "JavaScript", "https://github.com/DaviTaiyo/aulaDeAutenticacao"],
  ["LandPage", "Projeto didático ensinando a criar uma landing page simples.", "HTML", "https://github.com/DaviTaiyo/LandPage"],
  ["aulaDeWeb", "Aula de web para a turma 37.", "HTML", "https://github.com/DaviTaiyo/aulaDeWeb"],
  ["Aula_js_css_html", "TI38 - UC13 aula de web com JavaScript, CSS e HTML.", "JavaScript", "https://github.com/DaviTaiyo/Aula_js_css_html"],
  ["takeAFood", "Software criado para aprender novas tecnologias e manter prática ativa no GitHub.", "JavaScript", "https://github.com/DaviTaiyo/takeAFood"],
  ["React_project", "Site teste criado com foco em prática de React.", "Code", "https://github.com/DaviTaiyo/React_project"],
  ["Feelhope_Backend", "Backend do FeelHope.", "C#", "https://github.com/DaviTaiyo/Feelhope_Backend"],
  ["TexasGym_backend", "Back-end da academia Texas Gym.", "C#", "https://github.com/DaviTaiyo/TexasGym_backend"],
  ["texasgym_frontend", "Front-end do Texas Gym desenvolvido em contexto de estágio.", "Dart", "https://github.com/DaviTaiyo/texasgym_frontend"],
  ["FeelHope-FrontEnd", "Aplicativo FeelHope desenvolvido como TCC.", "C++", "https://github.com/DaviTaiyo/FeelHope-FrontEnd"],
  ["FeelHope-BackEnd", "API do FeelHope.", "Code", "https://github.com/DaviTaiyo/FeelHope-BackEnd"],
  ["Restaurant", "Projeto de interface para restaurante.", "HTML", "https://github.com/DaviTaiyo/Restaurant"],
  ["componentization", "Projeto de estudo sobre componentização.", "C++", "https://github.com/DaviTaiyo/componentization"],
  ["OpenaiGitWork", "Projeto de estudo e prática com front-end.", "CSS", "https://github.com/DaviTaiyo/OpenaiGitWork"],
  ["ApiMarvel", "Projeto consumindo API da Marvel.", "HTML", "https://github.com/DaviTaiyo/ApiMarvel"],
  ["youtube_clone", "Clone de YouTube desenvolvido em Flutter/Dart.", "Dart", "https://github.com/DaviTaiyo/youtube_clone"],
  ["Whatsapp_UI_UX_flutter", "Estudo de UI/UX do WhatsApp em Flutter.", "Dart", "https://github.com/DaviTaiyo/Whatsapp_UI_UX_flutter"]
];

function getValue(path) {
  return path.split(".").reduce((value, key) => value?.[key], text) ?? "";
}

function tag(label, className = "tag") {
  const span = document.createElement("span");
  span.className = className;
  span.textContent = label;
  return span;
}

function setupTheme() {
  const root = document.documentElement;
  const button = $("[data-theme-toggle]");
  const icon = $("[data-theme-icon]");

  const applyTheme = (theme) => {
    root.dataset.theme = theme;
    localStorage.setItem("portfolio-theme", theme);
    if (icon) icon.textContent = theme === "dark" ? "☾" : "☀";
  };

  applyTheme(localStorage.getItem("portfolio-theme") || "dark");
  button?.addEventListener("click", () => {
    applyTheme(root.dataset.theme === "dark" ? "light" : "dark");
  });
}

function renderTranslations() {
  localStorage.setItem("portfolio-lang", lang);

  $$("[data-i18n]").forEach((element) => {
    element.textContent = getValue(element.dataset.i18n);
  });

  $$("[data-lang-link]").forEach((element) => {
    element.classList.toggle("is-active", element.dataset.langLink === lang);
    element.addEventListener("click", () => {
      localStorage.setItem("portfolio-lang", element.dataset.langLink);
    });
  });

  const year = $("[data-year]");
  if (year) year.textContent = new Date().getFullYear();

  const inlineSkills = $("[data-skills-inline]");
  if (inlineSkills) inlineSkills.replaceChildren(...text.skills.inline.map((skill) => tag(skill, "chip")));

  renderProfile();
  renderAbout();
  renderSkills();
  renderTimeline();
  renderContent();
  requestAnimationFrame(setupReveal);
}

function renderProfile() {
  const root = $("[data-profile-meta]");
  if (!root) return;

  root.replaceChildren(...text.profile.meta.map(([label, value]) => {
    const item = document.createElement("div");
    item.className = "meta";
    item.innerHTML = `<span class="meta__label"></span><span class="meta__value"></span>`;
    $(".meta__label", item).textContent = label;
    $(".meta__value", item).textContent = value;
    return item;
  }));
}

function renderAbout() {
  const root = $("[data-about-cards]");
  if (!root) return;

  root.replaceChildren(...text.about.cards.map((card) => {
    const article = document.createElement("article");
    article.className = "card reveal";
    const title = document.createElement("h3");
    title.className = "h3";
    title.textContent = card.title;
    article.append(title);

    card.paragraphs?.forEach((paragraph) => {
      const p = document.createElement("p");
      p.className = "p";
      p.textContent = paragraph;
      article.append(p);
    });

    if (card.list) {
      const ul = document.createElement("ul");
      ul.className = "list";
      card.list.forEach((item) => {
        const li = document.createElement("li");
        li.innerHTML = `<span class="bullet"></span><span></span>`;
        $("span:last-child", li).textContent = item;
        ul.append(li);
      });
      article.append(ul);
    }

    if (card.note) {
      const divider = document.createElement("div");
      divider.className = "divider";
      const note = document.createElement("p");
      note.className = "p small";
      note.textContent = card.note;
      article.append(divider, note);
    }

    return article;
  }));
}

function renderSkills() {
  const root = $("[data-skill-groups]");
  if (!root) return;

  root.replaceChildren(...text.skills.groups.map(([title, description, skills]) => {
    const article = document.createElement("article");
    article.className = "card skill-card reveal";
    article.innerHTML = `<h3 class="h3"></h3><p class="p small"></p><div class="tags"></div>`;
    $(".h3", article).textContent = title;
    $(".p", article).textContent = description;
    $(".tags", article).replaceChildren(...skills.map((skill) => tag(skill)));
    return article;
  }));
}

function renderTimeline() {
  const root = $("[data-timeline]");
  if (!root) return;

  root.replaceChildren(...text.experience.items.map((entry) => {
    const itemData = Array.isArray(entry)
      ? { when: entry[0], title: entry[1], description: entry[2], company: "", highlights: [], tags: [] }
      : entry;

    const item = document.createElement("article");
    item.className = "tl card reveal";
    item.innerHTML = `
      <div class="tl__when"></div>
      <div>
        <div class="tl__title"></div>
        <div class="tl__company"></div>
        <div class="tl__desc"></div>
        <ul class="tl__highlights"></ul>
        <div class="tags tl__tags"></div>
      </div>
    `;
    $(".tl__when", item).textContent = itemData.when;
    $(".tl__title", item).textContent = itemData.title;
    $(".tl__company", item).textContent = itemData.company || "";
    $(".tl__desc", item).textContent = itemData.description;

    const highlights = $(".tl__highlights", item);
    highlights.replaceChildren(...(itemData.highlights || []).map((highlight) => {
      const li = document.createElement("li");
      li.textContent = highlight;
      return li;
    }));

    $(".tl__tags", item).replaceChildren(...(itemData.tags || []).map((label) => tag(label)));
    return item;
  }));
}

function renderContent() {
  const root = $("[data-content-cards]");
  if (!root) return;

  root.replaceChildren(...text.content.cards.map(([title, description, linkText], index) => {
    const article = document.createElement("article");
    article.className = "card reveal";
    const href = index === 2 ? `https://github.com/${GITHUB_USER}` : "#conteudos";
    article.innerHTML = `<h3 class="h3"></h3><p class="p"></p><a class="mini"></a>`;
    $(".h3", article).textContent = title;
    $(".p", article).textContent = description;
    const link = $(".mini", article);
    link.textContent = `${linkText} →`;
    link.href = href;
    if (href.startsWith("http")) {
      link.target = "_blank";
      link.rel = "noreferrer";
    }
    return article;
  }));
}

function fallbackProjects() {
  return publicProjectFallback.map(([name, description, language, html_url]) => ({
    name,
    description,
    html_url,
    homepage: "",
    language,
    topics: []
  }));
}

function normalizeProject(repo) {
  const topics = Array.isArray(repo.topics) ? repo.topics : [];
  return {
    name: repo.name || "Projeto",
    description: repo.description || "Projeto público no GitHub.",
    html_url: repo.html_url || `https://github.com/${GITHUB_USER}`,
    homepage: repo.homepage || "",
    language: repo.language || topics[0] || "Code",
    topics: topics.slice(0, 4),
    updated_at: repo.updated_at
  };
}

function renderProjects(projects) {
  const root = $("[data-projects]");
  if (!root) return;

  root.replaceChildren(...projects.map((project) => {
    const repo = normalizeProject(project);
    const article = document.createElement("article");
    article.className = "card project reveal";
    article.innerHTML = `
      <div class="project__top">
        <h3 class="h3"></h3>
        <span class="pill"></span>
      </div>
      <p class="p project__description"></p>
      <div class="tags"></div>
      <div class="project__actions"></div>
    `;

    $(".h3", article).textContent = repo.name.replaceAll("-", " ");
    $(".pill", article).textContent = repo.language;
    $(".project__description", article).textContent = repo.description;
    $(".tags", article).replaceChildren(...(repo.topics.length ? repo.topics : [repo.language]).map((label) => tag(label)));

    const repoLink = document.createElement("a");
    repoLink.className = "btn btn--ghost btn--sm";
    repoLink.href = repo.html_url;
    repoLink.target = "_blank";
    repoLink.rel = "noreferrer";
    repoLink.textContent = text.projects.repo;
    $(".project__actions", article).append(repoLink);

    if (repo.homepage) {
      const demoLink = document.createElement("a");
      demoLink.className = "btn btn--ghost btn--sm";
      demoLink.href = repo.homepage;
      demoLink.target = "_blank";
      demoLink.rel = "noreferrer";
      demoLink.textContent = text.projects.demo;
      $(".project__actions", article).append(demoLink);
    }

    return article;
  }));

  requestAnimationFrame(setupReveal);
}

async function loadGitHubProjects() {
  const status = $("[data-repo-status]");
  if (!status) return;

  status.className = "repo-status";
  status.textContent = text.projects.loading;

  try {
    const response = await fetch(`https://api.github.com/users/${GITHUB_USER}/repos?sort=updated&per_page=100&type=public`, {
      headers: { Accept: "application/vnd.github+json" }
    });
    if (!response.ok) throw new Error(`GitHub API ${response.status}`);

    const repos = await response.json();
    const visibleRepos = repos
      .filter((repo) => !repo.private)
      .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));

    status.classList.add("is-ok");
    status.textContent = `${text.projects.loaded}: ${visibleRepos.length}`;
    renderProjects(visibleRepos.length ? visibleRepos : fallbackProjects());
  } catch {
    status.classList.add("is-error");
    status.textContent = text.projects.error;
    renderProjects(fallbackProjects());
  }
}

function setupMenu() {
  const button = $("[data-menu-toggle]");
  const nav = $("[data-nav]");
  if (!button || !nav) return;

  button.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    button.setAttribute("aria-expanded", String(isOpen));
  });

  $$(".nav__link", nav).forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      button.setAttribute("aria-expanded", "false");
    });
  });
}

function setupHeader() {
  const header = $("[data-header]");
  if (!header) return;
  const sync = () => header.classList.toggle("is-scrolled", window.scrollY > 18);
  sync();
  window.addEventListener("scroll", sync, { passive: true });
}

function setupActiveNav() {
  const links = $$(".nav__link");
  const sections = links.map((link) => $(link.getAttribute("href"))).filter(Boolean);
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      links.forEach((link) => {
        link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`);
      });
    });
  }, { rootMargin: "-42% 0px -52% 0px", threshold: 0 });
  sections.forEach((section) => observer.observe(section));
}

function setupReveal() {
  const items = $$(".reveal:not(.is-visible)");
  if (!items.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, { threshold: .16 });

  items.forEach((item, index) => {
    item.style.transitionDelay = `${Math.min(index * 35, 180)}ms`;
    observer.observe(item);
  });
}

function setupContactForm() {
  const form = $("[data-contact-form]");
  const hint = $("[data-form-hint]");
  if (!form || !hint) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const subjectText = String(data.get("subject") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (!name || !subjectText || !message) {
      hint.textContent = text.contact.required;
      return;
    }

    const subject = encodeURIComponent(`Portfolio - ${subjectText}`);
    const body = encodeURIComponent(`${message}\n\n${text.contact.fromLabel}: ${name}`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    hint.textContent = text.contact.sent;
    form.reset();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setupTheme();
  renderTranslations();
  setupMenu();
  setupHeader();
  setupActiveNav();
  setupContactForm();
  loadGitHubProjects();
});
