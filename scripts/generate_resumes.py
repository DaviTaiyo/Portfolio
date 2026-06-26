from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import (
    BaseDocTemplate,
    Frame,
    KeepTogether,
    NextPageTemplate,
    PageBreak,
    PageTemplate,
    Paragraph,
    Spacer,
)


OUT_DIR = Path("View/Assets/CV")
OUT_DIR.mkdir(parents=True, exist_ok=True)

PAGE_W, PAGE_H = A4
MARGIN_X = 15 * mm
MARGIN_TOP = 13 * mm
MARGIN_BOTTOM = 12 * mm
ACCENT = colors.HexColor("#5a7dff")
DARK = colors.HexColor("#162033")
TEXT = colors.HexColor("#202938")
MUTED = colors.HexColor("#536174")
LINE = colors.HexColor("#d9e2f1")

JA_FONT = "MS-Gothic-Embedded"
pdfmetrics.registerFont(TTFont(JA_FONT, r"C:\Windows\Fonts\msgothic.ttc", subfontIndex=0))


def base_styles(lang):
    styles = getSampleStyleSheet()
    is_ja = lang == "ja"
    font = JA_FONT if is_ja else "Helvetica"
    bold = JA_FONT if is_ja else "Helvetica-Bold"
    word_wrap = "CJK" if is_ja else None

    return {
        "name": ParagraphStyle(
            "name",
            parent=styles["Normal"],
            fontName=bold,
            fontSize=22 if not is_ja else 20,
            leading=25,
            textColor=DARK,
            alignment=TA_CENTER,
            spaceAfter=3,
            wordWrap=word_wrap,
        ),
        "headline": ParagraphStyle(
            "headline",
            parent=styles["Normal"],
            fontName=bold,
            fontSize=9.5,
            leading=12,
            textColor=ACCENT,
            alignment=TA_CENTER,
            spaceAfter=4,
            wordWrap=word_wrap,
        ),
        "contact": ParagraphStyle(
            "contact",
            parent=styles["Normal"],
            fontName=font,
            fontSize=8.2,
            leading=10,
            textColor=MUTED,
            alignment=TA_CENTER,
            spaceAfter=8,
            wordWrap=word_wrap,
        ),
        "section": ParagraphStyle(
            "section",
            parent=styles["Normal"],
            fontName=bold,
            fontSize=10.5,
            leading=13,
            textColor=DARK,
            spaceBefore=7,
            spaceAfter=3,
            borderPadding=(0, 0, 2, 0),
            borderColor=LINE,
            borderWidth=0,
            borderBottomWidth=0.7,
            wordWrap=word_wrap,
        ),
        "body": ParagraphStyle(
            "body",
            parent=styles["Normal"],
            fontName=font,
            fontSize=8.8 if not is_ja else 8.2,
            leading=11.3 if not is_ja else 11.8,
            textColor=TEXT,
            spaceAfter=3,
            wordWrap=word_wrap,
        ),
        "role": ParagraphStyle(
            "role",
            parent=styles["Normal"],
            fontName=bold,
            fontSize=9.1,
            leading=11.5,
            textColor=DARK,
            spaceBefore=4,
            spaceAfter=1,
            wordWrap=word_wrap,
        ),
        "meta": ParagraphStyle(
            "meta",
            parent=styles["Normal"],
            fontName=font,
            fontSize=8,
            leading=10,
            textColor=MUTED,
            spaceAfter=2,
            wordWrap=word_wrap,
        ),
        "bullet": ParagraphStyle(
            "bullet",
            parent=styles["Normal"],
            fontName=font,
            fontSize=8.3 if not is_ja else 7.9,
            leading=10.5 if not is_ja else 11.2,
            textColor=TEXT,
            leftIndent=8,
            firstLineIndent=-6,
            spaceAfter=1.4,
            wordWrap=word_wrap,
        ),
        "small": ParagraphStyle(
            "small",
            parent=styles["Normal"],
            fontName=font,
            fontSize=7.4,
            leading=9,
            textColor=MUTED,
            wordWrap=word_wrap,
        ),
    }


def page_art(canvas, doc):
    canvas.saveState()
    canvas.setFillColor(ACCENT)
    canvas.rect(0, PAGE_H - 5 * mm, PAGE_W, 5 * mm, fill=1, stroke=0)
    canvas.setStrokeColor(LINE)
    canvas.setLineWidth(0.4)
    canvas.line(MARGIN_X, MARGIN_BOTTOM - 3 * mm, PAGE_W - MARGIN_X, MARGIN_BOTTOM - 3 * mm)
    canvas.setFont("Helvetica", 7)
    canvas.setFillColor(MUTED)
    canvas.drawRightString(PAGE_W - MARGIN_X, MARGIN_BOTTOM - 7 * mm, f"Page {doc.page}")
    canvas.restoreState()


def p(text, style):
    return Paragraph(text.replace("&", "&amp;"), style)


def bullets(items, style):
    return [p(f"- {item}", style) for item in items]


def section(title, styles):
    return p(title.upper(), styles["section"])


def role(item, styles):
    parts = [p(item["title"], styles["role"]), p(item["meta"], styles["meta"])]
    parts.extend(bullets(item["bullets"], styles["bullet"]))
    return KeepTogether(parts)


def build_pdf(filename, data, lang):
    styles = base_styles(lang)
    doc = BaseDocTemplate(
        str(OUT_DIR / filename),
        pagesize=A4,
        leftMargin=MARGIN_X,
        rightMargin=MARGIN_X,
        topMargin=MARGIN_TOP,
        bottomMargin=MARGIN_BOTTOM + 4 * mm,
        title=data["name"],
        author="Davi Paulino",
        subject=data["headline"],
    )
    frame = Frame(doc.leftMargin, doc.bottomMargin, doc.width, doc.height, id="normal")
    doc.addPageTemplates([PageTemplate(id="base", frames=[frame], onPage=page_art)])

    story = [
        p(data["name"], styles["name"]),
        p(data["headline"], styles["headline"]),
        p(data["contact"], styles["contact"]),
        section(data["labels"]["summary"], styles),
        p(data["summary"], styles["body"]),
        section(data["labels"]["skills"], styles),
        p(data["skills"], styles["body"]),
        section(data["labels"]["certifications"], styles),
    ]
    story.extend(bullets(data["certifications"], styles["bullet"]))
    story.append(section(data["labels"]["experience"], styles))
    for item in data["experience"]:
        story.append(role(item, styles))
    story.append(section(data["labels"]["projects"], styles))
    story.extend(bullets(data["projects"], styles["bullet"]))
    story.append(section(data["labels"]["education"], styles))
    story.extend(bullets(data["education"], styles["bullet"]))
    story.append(Spacer(1, 3 * mm))
    story.append(p(data["footer"], styles["small"]))

    doc.build(story)


common_contact = (
    "Brazil | Bebedouro - SP | +55 17 99249-4186 | "
    "davipaulino@outlook.com.br | linkedin.com/in/davipaulino | github.com/DaviTaiyo"
)

DATA = {
    "pt": {
        "filename": "Curriculo_Davi_Paulino_PT.pdf",
        "name": "Davi Paulino",
        "headline": "QA Automation Engineer | Java, Selenium, RestAssured, Appium | Web, API e Mobile Testing | BDD/Cucumber | SQL | CI/CD | CTFL",
        "contact": common_contact,
        "labels": {
            "summary": "Resumo profissional",
            "skills": "Competencias tecnicas",
            "certifications": "Certificacoes",
            "experience": "Experiencia profissional",
            "projects": "Projetos publicos e portfolio",
            "education": "Formacao academica",
        },
        "summary": (
            "Engenheiro de Qualidade de Software com experiencia em testes manuais e automacao para aplicacoes Web, Mobile e APIs REST. "
            "Atuo na criacao, manutencao e execucao de frameworks escalaveis com Java, Selenium WebDriver, RestAssured, Appium, BDD/Cucumber, Gherkin e Page Object Model. "
            "Experiencia em validacao funcional, regressao, smoke, end-to-end, analise de logs, SQL, evidencias tecnicas, refinamento de requisitos e suporte a pipelines CI/CD. "
            "Perfil hibrido com base em QA, desenvolvimento mobile Flutter/Dart, backend C#, ensino de programacao e suporte tecnico, focado em reducao de riscos em producao e confiabilidade de entregas."
        ),
        "skills": (
            "QA Automation: Selenium WebDriver, Playwright, Appium, RestAssured, Cypress, Robot Framework, JUnit, Cucumber, Gherkin, POM, BDD. "
            "Testing: Web Testing, Mobile Testing, API Testing, Regression, Smoke, E2E, Exploratory, Functional, Integration, Acceptance, Defect Management, Evidence Analysis. "
            "Languages: Java, JavaScript, TypeScript, C#, Python, Dart, SQL. "
            "Tools: Postman, JMeter, k6, Git, GitHub, GitHub Actions, Jenkins, Docker, Azure, Scrum, Kanban. "
            "Development: Flutter, REST APIs, HTML, CSS, jQuery, React, Clean Code, Clean Architecture, backend validation and database checks."
        ),
        "certifications": ["CTFL - Certified Tester Foundation Level (BSTQB / ISTQB) - 2026"],
        "experience": [
            {
                "title": "QA Automation Engineer - Spread Tecnologia",
                "meta": "Jan 2025 - Atual | Sao Paulo, Brasil",
                "bullets": [
                    "Desenvolvimento, manutencao e execucao de automacoes Web, Mobile e API com Java, Selenium WebDriver, RestAssured, Appium e BDD/Cucumber.",
                    "Validacao de APIs REST, integracoes, regras de negocio e dados, apoiando analise de inconsistencias em ambientes corporativos.",
                    "Execucao de testes manuais e automatizados de regressao, smoke e end-to-end, com documentacao de evidencias e resultados.",
                    "Analise de falhas, logs, banco de dados e APIs para apoiar causa raiz, correcao com desenvolvimento/produto e melhoria continua.",
                    "Apoio a testes em fluxos CI/CD com foco em estabilidade, cobertura de regressao e reducao de risco em producao.",
                ],
            },
            {
                "title": "Docente de Programacao - Senac Sao Paulo",
                "meta": "Fev 2025 - Atual | Fontanella, SP",
                "bullets": [
                    "Planejamento e conducao de aulas teoricas e praticas em logica, desenvolvimento Web/Desktop, APIs e fundamentos de tecnologia.",
                    "Orientacao de projetos praticos com metodologias ativas, autonomia, raciocinio logico e resolucao de problemas.",
                    "Integracao de fundamentos de qualidade de software, testes e ciclo de desenvolvimento em atividades educacionais.",
                ],
            },
            {
                "title": "Software QA Analyst - Like Brands",
                "meta": "Mai 2023 - Mar 2024 | Fontanella, SP",
                "bullets": [
                    "Planejamento e execucao de testes funcionais, exploratorios, regressao, integracao, sistema e aceitacao em Web, backend e APIs.",
                    "Validacao de telas, fluxos de negocio, endpoints e integracoes backend com documentacao de evidencias.",
                    "Registro de bugs com cenarios de reproducao, informacoes tecnicas, analise de riscos, retestes e apoio a priorizacao de correcoes.",
                ],
            },
            {
                "title": "QA Analyst & Mobile Developer - CIFAL Distribuidora",
                "meta": "Ago 2022 - Jan 2024 | Fontanella, SP",
                "bullets": [
                    "Desenvolvimento e manutencao de funcionalidades mobile com Flutter e Dart, aplicando clean code e boas praticas de arquitetura.",
                    "Execucao de testes manuais em aplicacoes mobile, validando fluxos, regras de negocio, cenarios de erro e qualidade de entrega.",
                    "Colaboracao em rotinas ageis com Scrum/Kanban, GitHub e Azure, com documentacao de bugs, evidencias e resultados.",
                ],
            },
            {
                "title": "Front-end Developer - Mais Ingressos",
                "meta": "Fev 2022 - Jul 2022 | Bebedouro, SP",
                "bullets": [
                    "Desenvolvimento de projetos front-end e estudos praticos para criacao de software do zero com HTML, CSS e JavaScript.",
                ],
            },
            {
                "title": "IT Support Analyst - Colegio Alpha / Sigacred",
                "meta": "Fev 2018 - Jul 2021 | Viradouro, SP / Terra Roxa, SP",
                "bullets": [
                    "Suporte a usuarios, professores, trabalhadores e clientes, manutencao de computadores e apoio no uso de softwares corporativos.",
                ],
            },
        ],
        "projects": [
            "Portfolio - site pessoal multi-idioma com HTML, CSS e JavaScript, tema dark/light, integracao com GitHub API e download de curriculo por idioma.",
            "TakeAFood - software em JavaScript criado para pratica continua de novas tecnologias e consolidacao de portfolio publico.",
            "FeelHope - aplicativo e API de TCC com front-end mobile e backend, envolvendo arquitetura, fluxo de produto e integracao de servicos.",
            "TexasGym - front-end Flutter/Dart e backend C#, exercitando integracao mobile, API e regras de negocio.",
            "Projetos educacionais publicos - aulas de autenticacao com bcrypt, jQuery/CSS, web com HTML/CSS/JS, carrinho de compras e landing pages.",
            "GitHub publico com 22 repositorios: github.com/DaviTaiyo",
        ],
        "education": ["Bacharelado em Sistemas de Informacao - UNIFAFIBE (2021 - 2024)"],
        "footer": "Curriculo otimizado para ATS com termos tecnicos reais, texto selecionavel e links publicos verificaveis.",
    },
    "en": {
        "filename": "Davi_Paulino_Resume_EN.pdf",
        "name": "Davi Paulino",
        "headline": "QA Automation Engineer | Java, Selenium, RestAssured, Appium | Web, API and Mobile Testing | BDD/Cucumber | SQL | CI/CD | CTFL",
        "contact": common_contact,
        "labels": {
            "summary": "Professional summary",
            "skills": "Technical skills",
            "certifications": "Certifications",
            "experience": "Professional experience",
            "projects": "Public projects and portfolio",
            "education": "Education",
        },
        "summary": (
            "Quality Assurance Engineer experienced in manual testing and test automation for Web, Mobile and REST API applications. "
            "Hands-on background designing, maintaining and executing scalable automation frameworks with Java, Selenium WebDriver, RestAssured, Appium, BDD/Cucumber, Gherkin and Page Object Model. "
            "Experienced in functional validation, regression, smoke, end-to-end testing, log analysis, SQL checks, technical evidence, requirement refinement and CI/CD test flows. "
            "Hybrid profile combining QA, Flutter/Dart mobile development, C# backend exposure, programming instruction and technical support, focused on delivery reliability and production risk reduction."
        ),
        "skills": (
            "QA Automation: Selenium WebDriver, Playwright, Appium, RestAssured, Cypress, Robot Framework, JUnit, Cucumber, Gherkin, POM, BDD. "
            "Testing: Web Testing, Mobile Testing, API Testing, Regression, Smoke, E2E, Exploratory, Functional, Integration, Acceptance, Defect Management, Evidence Analysis. "
            "Languages: Java, JavaScript, TypeScript, C#, Python, Dart, SQL. "
            "Tools: Postman, JMeter, k6, Git, GitHub, GitHub Actions, Jenkins, Docker, Azure, Scrum, Kanban. "
            "Development: Flutter, REST APIs, HTML, CSS, jQuery, React, Clean Code, Clean Architecture, backend validation and database checks."
        ),
        "certifications": ["CTFL - Certified Tester Foundation Level (BSTQB / ISTQB) - 2026"],
        "experience": [
            {
                "title": "QA Automation Engineer - Spread Tecnologia",
                "meta": "Jan 2025 - Present | Sao Paulo, Brazil",
                "bullets": [
                    "Develop, maintain and execute Web, Mobile and API test automation with Java, Selenium WebDriver, RestAssured, Appium and BDD/Cucumber.",
                    "Validate REST APIs, integrations, business rules and data to support inconsistency analysis in corporate environments.",
                    "Run manual and automated regression, smoke and end-to-end tests with clear evidence and test result documentation.",
                    "Analyze failures, logs, databases and APIs to support root cause analysis, product/development fixes and continuous improvement.",
                    "Support CI/CD test flows focused on stability, regression coverage and production risk reduction.",
                ],
            },
            {
                "title": "Programming Instructor - Senac Sao Paulo",
                "meta": "Feb 2025 - Present | Fontanella, SP",
                "bullets": [
                    "Plan and teach theoretical and practical classes in logic, Web/Desktop development, APIs and technology fundamentals.",
                    "Guide practical projects using active methodologies, autonomy, logical reasoning and problem solving.",
                    "Integrate software quality, testing and development lifecycle fundamentals into educational activities.",
                ],
            },
            {
                "title": "Software QA Analyst - Like Brands",
                "meta": "May 2023 - Mar 2024 | Fontanella, SP",
                "bullets": [
                    "Planned and executed functional, exploratory, regression, integration, system and acceptance tests for Web, backend and APIs.",
                    "Validated screens, business flows, endpoints and backend integrations with clear evidence documentation.",
                    "Reported defects with reproduction scenarios, technical details, risk analysis, retesting and support for correction prioritization.",
                ],
            },
            {
                "title": "QA Analyst & Mobile Developer - CIFAL Distribuidora",
                "meta": "Aug 2022 - Jan 2024 | Fontanella, SP",
                "bullets": [
                    "Developed and maintained mobile features with Flutter and Dart, applying clean code and architecture practices.",
                    "Executed manual tests in mobile applications, validating flows, business rules, error scenarios and delivery quality.",
                    "Collaborated in agile routines with Scrum/Kanban, GitHub and Azure, documenting defects, evidence and test results.",
                ],
            },
            {
                "title": "Front-end Developer - Mais Ingressos",
                "meta": "Feb 2022 - Jul 2022 | Bebedouro, SP",
                "bullets": ["Built front-end projects and practical studies for software creation from scratch with HTML, CSS and JavaScript."],
            },
            {
                "title": "IT Support Analyst - Colegio Alpha / Sigacred",
                "meta": "Feb 2018 - Jul 2021 | Viradouro, SP / Terra Roxa, SP",
                "bullets": ["Provided user support, computer maintenance and operational help for teachers, workers, clients and corporate software users."],
            },
        ],
        "projects": [
            "Portfolio - multilingual personal website with HTML, CSS and JavaScript, dark/light theme, GitHub API integration and language-aware resume download.",
            "TakeAFood - JavaScript software created to practice new technologies and strengthen a public portfolio.",
            "FeelHope - capstone mobile app and API involving product flow, architecture and service integration.",
            "TexasGym - Flutter/Dart front-end and C# backend, practicing mobile integration, API usage and business rules.",
            "Educational public projects - authentication with bcrypt, jQuery/CSS, Web with HTML/CSS/JS, shopping cart and landing pages.",
            "Public GitHub with 22 repositories: github.com/DaviTaiyo",
        ],
        "education": ["Bachelor's Degree in Information Systems - UNIFAFIBE (2021 - 2024)"],
        "footer": "ATS-optimized resume with real technical keywords, selectable text and verifiable public links.",
    },
    "ja": {
        "filename": "Davi_Paulino_Resume_JA.pdf",
        "name": "Davi Paulino",
        "headline": "QA自動化エンジニア | Java, Selenium, RestAssured, Appium | Web/API/Mobile Testing | BDD/Cucumber | SQL | CI/CD | CTFL",
        "contact": common_contact,
        "labels": {
            "summary": "職務要約",
            "skills": "技術スキル",
            "certifications": "資格",
            "experience": "職務経歴",
            "projects": "公開プロジェクトとポートフォリオ",
            "education": "学歴",
        },
        "summary": (
            "Web、モバイル、REST APIアプリケーション向けの手動テストおよびテスト自動化の経験を持つQAエンジニアです。 "
            "Java、Selenium WebDriver、RestAssured、Appium、BDD/Cucumber、Gherkin、Page Object Modelを用いた拡張性のある自動化フレームワークの設計、保守、実行に携わっています。 "
            "機能検証、回帰テスト、スモークテスト、E2Eテスト、ログ分析、SQL確認、技術的な証跡作成、要件確認、CI/CD内でのテスト実行を経験しています。 "
            "QA、Flutter/Dartモバイル開発、C#バックエンド、プログラミング教育、テクニカルサポートの経験を組み合わせ、品質とリリース信頼性の向上に貢献します。"
        ),
        "skills": (
            "QA自動化: Selenium WebDriver, Playwright, Appium, RestAssured, Cypress, Robot Framework, JUnit, Cucumber, Gherkin, POM, BDD. "
            "テスト: Web Testing, Mobile Testing, API Testing, Regression, Smoke, E2E, Exploratory, Functional, Integration, Acceptance, Defect Management, Evidence Analysis. "
            "言語: Java, JavaScript, TypeScript, C#, Python, Dart, SQL. "
            "ツール: Postman, JMeter, k6, Git, GitHub, GitHub Actions, Jenkins, Docker, Azure, Scrum, Kanban. "
            "開発: Flutter, REST APIs, HTML, CSS, jQuery, React, Clean Code, Clean Architecture, backend validation and database checks."
        ),
        "certifications": ["CTFL - Certified Tester Foundation Level (BSTQB / ISTQB) - 2026"],
        "experience": [
            {
                "title": "QA Automation Engineer - Spread Tecnologia",
                "meta": "2025年1月 - 現在 | Sao Paulo, Brazil",
                "bullets": [
                    "Java、Selenium WebDriver、RestAssured、Appium、BDD/Cucumberを用いたWeb、モバイル、APIテスト自動化の開発、保守、実行。",
                    "REST API、連携、ビジネスルール、データを検証し、企業システムでの不整合分析を支援。",
                    "回帰、スモーク、E2Eの手動および自動テストを実行し、証跡と結果を明確に文書化。",
                    "ログ、データベース、API、障害情報を分析し、原因調査、修正支援、継続的改善に貢献。",
                    "CI/CD内でのテスト実行を支援し、安定性、回帰カバレッジ、本番リスク低減に注力。",
                ],
            },
            {
                "title": "Programming Instructor - Senac Sao Paulo",
                "meta": "2025年2月 - 現在 | Fontanella, SP",
                "bullets": [
                    "ロジック、Web/Desktop開発、API、技術基礎に関する理論および実践授業を計画、実施。",
                    "実践プロジェクトを通じて、主体性、論理的思考、問題解決を指導。",
                    "ソフトウェア品質、テスト、開発ライフサイクルの基礎を教育活動へ統合。",
                ],
            },
            {
                "title": "Software QA Analyst - Like Brands",
                "meta": "2023年5月 - 2024年3月 | Fontanella, SP",
                "bullets": [
                    "Web、バックエンド、API向けの機能、探索、回帰、結合、システム、受け入れテストを計画、実行。",
                    "画面、業務フロー、エンドポイント、バックエンド連携を検証し、証跡を文書化。",
                    "再現手順、技術情報、リスク分析、再テストを含む不具合報告により修正優先度を支援。",
                ],
            },
            {
                "title": "QA Analyst & Mobile Developer - CIFAL Distribuidora",
                "meta": "2022年8月 - 2024年1月 | Fontanella, SP",
                "bullets": [
                    "FlutterとDartでモバイル機能を開発、保守し、clean codeとアーキテクチャの考え方を適用。",
                    "モバイルアプリの手動テストを実施し、フロー、業務ルール、エラーシナリオ、品質を検証。",
                    "Scrum/Kanban、GitHub、Azureを用いたアジャイル運用で、不具合、証跡、結果を文書化。",
                ],
            },
            {
                "title": "Front-end Developer - Mais Ingressos",
                "meta": "2022年2月 - 2022年7月 | Bebedouro, SP",
                "bullets": ["HTML、CSS、JavaScriptを用いて、ゼロからソフトウェアを作るためのフロントエンド開発と実践学習を実施。"],
            },
            {
                "title": "IT Support Analyst - Colegio Alpha / Sigacred",
                "meta": "2018年2月 - 2021年7月 | Viradouro, SP / Terra Roxa, SP",
                "bullets": ["ユーザー、教師、従業員、顧客向けのサポート、PC保守、業務ソフトウェア利用支援を担当。"],
            },
        ],
        "projects": [
            "Portfolio - HTML、CSS、JavaScriptによる多言語ポートフォリオ。dark/lightテーマ、GitHub API連携、言語別履歴書ダウンロードに対応。",
            "TakeAFood - 新しい技術を学び、公開ポートフォリオを強化するためのJavaScriptソフトウェア。",
            "FeelHope - TCCとして開発したモバイルアプリとAPI。製品フロー、アーキテクチャ、サービス連携を経験。",
            "TexasGym - Flutter/DartフロントエンドとC#バックエンド。モバイル連携、API、業務ルールを実践。",
            "教育用公開プロジェクト - bcrypt認証、jQuery/CSS、HTML/CSS/JS、ショッピングカート、ランディングページ。",
            "公開GitHub 22リポジトリ: github.com/DaviTaiyo",
        ],
        "education": ["情報システム学士 - UNIFAFIBE (2021 - 2024)"],
        "footer": "ATSに配慮した、選択可能なテキストと検証可能な公開リンクを含む履歴書です。",
    },
}


if __name__ == "__main__":
    for lang, data in DATA.items():
        build_pdf(data["filename"], data, lang)
        print(OUT_DIR / data["filename"])
