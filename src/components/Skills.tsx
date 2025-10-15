import React from "react";
import {
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiTypescript,
    SiAngular,
    SiSpringboot,
    SiDocker,
    SiKubernetes,
    SiGithub,
    SiGit,
    SiGitlab,
    SiPostman,
    SiSwagger,
    SiOracle,
    SiMysql,
    SiRedis,
    SiJenkins,
    SiApachemaven,
    SiGradle,
    SiSonarqube,
    SiIntellijidea,
    SiEclipseide,
    SiPowers,
    SiApachetomcat,
    SiOpenapiinitiative,
    SiJira,
} from 'react-icons/si';

export default function Skills() {
    const skills = [
        {
            id: 'languages',
            title: 'Languages & Frameworks',
            icon: 'code',
            items: ['Java', 'Spring Boot', 'Spring MVC', 'Spring Security', 'Spring Data JPA', 'Angular', 'TypeScript', 'HTML', 'CSS', 'JavaScript'],
        },
        {
            id: 'apis',
            title: 'APIs & Auth',
            icon: 'shield',
            items: ['REST/JSON', 'OAuth2 / OIDC', 'Ping Identity (SSO)', 'OpenAPI / Swagger', 'Postman'],
        },
        {
            id: 'data',
            title: 'Data',
            icon: 'database',
            items: ['Oracle (PL/SQL)', 'MySQL', 'Redis'],
        },
        {
            id: 'devops',
            title: 'DevOps & Tools',
            icon: 'tools',
            items: ['Git', 'GitHub', 'GitLab', 'Maven / Gradle', 'Jenkins', 'Docker', 'Kubernetes', 'Tomcat / WebSphere', 'IntelliJ / Eclipse', 'PowerShell'],
        },
        {
            id: 'quality',
            title: 'Quality & Process',
            icon: 'check',
            items: ['JUnit 5', 'Mockito', 'SonarQube / SonarLint', 'Agile / Scrum (Jira)'],
        },
    ];

    function renderItemIcon(item: string) {
        const key = item.toLowerCase();

        // frontend
        if (key.includes('html')) return <SiHtml5 size={24} color="#E34F26" aria-label="HTML5" role="img" />;
        if (key.includes('css')) return <SiCss3 size={24} color="#1572B6" aria-label="CSS3" role="img" />;
        if (key.includes('javascript') || key === 'js') return <SiJavascript size={24} color="#F7DF1E" aria-label="JavaScript" role="img" />;
        if (key.includes('typescript') || key === 'ts') return <SiTypescript size={24} color="#3178C6" aria-label="TypeScript" role="img" />;
        if (key.includes('angular')) return <SiAngular size={24} color="#DD0031" aria-label="Angular" role="img" />;

        if (key.includes('java')) {
            return (
                <img src="/images/java.png" alt="Java" width={24} height={24} style={{ display: 'block' }} />
            );
        }

        // APIs / docs / auth
        if (key.includes('postman')) return <SiPostman size={24} color="#FF6C37" aria-label="Postman" role="img" />;
        if (key.includes('swagger')) return <SiSwagger size={24} color="#85EA2D" aria-label="Swagger" role="img" />;
        if (key.includes('openapi')) return <SiOpenapiinitiative size={24} color="#6EA1FF" aria-label="OpenAPI" role="img" />;
        // Ping Identity (use static asset for canonical mark)
        if (key.includes('ping')) {
            return (
                <img src="/images/ping.svg" alt="Ping Identity" width={24} height={24} style={{ display: 'block' }} />
            );
        }

        // backend / infra
        if (key.includes('spring')) return <SiSpringboot size={24} color="#6DB33F" aria-label="Spring Boot" role="img" />;
        if (key.includes('docker')) return <SiDocker size={24} color="#2496ED" aria-label="Docker" role="img" />;
        if (key.includes('kubernetes') || key.includes('k8s')) return <SiKubernetes size={24} color="#326CE5" aria-label="Kubernetes" role="img" />;
        if (key.includes('tomcat') || key.includes('websphere') || key.includes('server')) return <SiApachetomcat size={24} color="#EE7600" aria-label="Tomcat" role="img" />;

        // individual SCM icons (fallbacks) - check specific names first to avoid substring collisions
        if (key.includes('github')) return <SiGithub size={24} color="#FFFFFF" aria-label="GitHub" role="img" />;
        if (key.includes('gitlab')) return <SiGitlab size={24} color="#FC6D26" aria-label="GitLab" role="img" />;
        if (key.includes('git')) return <SiGit size={24} color="#F05032" aria-label="Git" role="img" />;
        if (key.includes('jenkins')) return <SiJenkins size={24} color="#D24939" aria-label="Jenkins" role="img" />;
        if (key.includes('maven')) return <SiApachemaven size={24} color="#C71A36" aria-label="Maven" role="img" />;
        if (key.includes('gradle')) return <SiGradle size={24} color="#2DBE3E" aria-label="Gradle" role="img" />;

        // data stores
        if (key.includes('oracle')) return <SiOracle size={24} color="#F80000" aria-label="Oracle" role="img" />;
        if (key.includes('mysql')) return <SiMysql size={24} color="#00A6E0" aria-label="MySQL" role="img" />;
        if (key.includes('redis')) return <SiRedis size={24} color="#D82C20" aria-label="Redis" role="img" />;

        // JUnit (static asset) and Mockito
        if (key.includes('junit')) {
            return <img src="/images/junit.svg" alt="JUnit" width={24} height={24} style={{ display: 'block' }} />;
        }
        if (key.includes('mockito')) {
            return <img src="/images/mockito.svg" alt="Mockito" width={24} height={24} style={{ display: 'block' }} />;
        }

        // tools / ide / quality
        if (key.includes('intellij') || key.includes('idea')) return <SiIntellijidea size={24} color="#FFFFFF" aria-label="IntelliJ" role="img" />;
        if (key.includes('eclipse')) return <SiEclipseide size={24} color="#FFFFFF" aria-label="Eclipse" role="img" />;
        if (key.includes('sonar') || key.includes('sonarqube')) return <SiSonarqube size={24} color="#00CFFF" aria-label="SonarQube" role="img" />;
        if (key.includes('jira') || key.includes('agile')) return <SiJira size={24} color="#0052CC" aria-label="Jira" role="img" />;

        // PowerShell fallback
        if (key.includes('powershell')) return <SiPowers size={24} color="#00BCF2" aria-label="PowerShell" role="img" />;

        // generic fallback icon
        return (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" role="img">
                <title>Tool</title>
                <circle cx="12" cy="12" r="8" stroke="#94a3b8" strokeWidth="1.4" />
            </svg>
        );
    }

    return (
        <section id="skills" className="w-full py-16" style={{ background: 'var(--site-bg)' }}>
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-2xl font-bold text-white">Skills</h2>
                <p className="mt-3 text-site-muted max-w-2xl">Focused on Java and backend engineering with strong experience in building production services.</p>

                <div className="mt-8 space-y-6">
                    {skills.map((s) => (
                        <div key={s.id}>
                            <h3 className="text-lg font-semibold text-white">{s.title}</h3>
                            <div className="mt-2 flex flex-wrap gap-3">
                                {s.items.map((it) => (
                                    <div
                                        key={it}
                                        className="inline-flex items-center gap-3 px-3 py-1 rounded-full"
                                        style={{ background: 'var(--site-surface)' }}
                                    >
                                        <span className="flex-shrink-0" style={{ minWidth: 24, minHeight: 24, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                                            {renderItemIcon(it)}
                                        </span>
                                        <span className="text-site-muted text-sm">{it}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
