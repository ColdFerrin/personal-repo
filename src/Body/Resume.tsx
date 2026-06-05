import React from 'react';
import './Resume.css';
import pdf from './pdf.svg';

export function Resume() {
    return (
        <div className="page">


            <header>
                <div>
                    <h1 className="name">Ferrin <em>Katz</em></h1>
                </div>
                <div className="contact">
                    <div>LA Metro Area</div>
                    <div><a href="tel:3238547793">(323) 854-7793</a></div>
                    <div><a href="mailto:ferrinkatz@ferrinkatz.com">ferrinkatz@ferrinkatz.com</a></div>
                </div>
            </header>


            <section className="summary">
                <div className="section-label">Summary</div>
                <p>Senior Software Engineer with a track record of designing and owning high-throughput,
                    reliability-critical backend systems across fintech, fleet management, and enterprise platforms.
                    Experienced building fault-tolerant distributed architectures, data synchronization pipelines, and
                    scalable REST APIs that support mission-critical workflows at scale. Adept at leading platform
                    modernization efforts that drive measurable operational impact and delivering complex integrations
                    across stakeholder workstreams on time and to scope.</p>
            </section>


            <section>
                <div className="section-label">Education</div>
                <div className="edu-row">
                    <div>
                        <div className="edu-degree">Bachelor of Science, Software Engineering</div>
                        <div className="edu-school">Embry-Riddle Aeronautical University (ERAU)</div>
                    </div>
                    <div className="edu-meta">
                        <div>Prescott, AZ</div>
                        <div>May 2020</div>
                    </div>
                </div>
            </section>


            <section>
                <div className="section-label">Technical Skills</div>
                <div className="skills-grid">

                    <div className="skill-row">
                        <div className="skill-label">Languages</div>
                        <div className="skill-tags">
                            <span className="tag">Java</span><span className="tag">Python</span><span
                            className="tag">JavaScript</span>
                            <span className="tag">Kotlin</span><span className="tag">C++</span><span
                            className="tag">C</span>
                            <span className="tag">C#</span><span className="tag">Groovy</span><span
                            className="tag">Bash</span>
                            <span className="tag">HTML</span><span className="tag">CSS</span>
                        </div>
                    </div>

                    <div className="skill-row">
                        <div className="skill-label">Libraries &amp; Frameworks</div>
                        <div className="skill-tags">
                            <span className="tag">Spring Boot</span><span className="tag">Spring JPA</span>
                            <span className="tag">Hibernate</span><span className="tag">Spring Security</span>
                            <span className="tag">React</span><span className="tag">jQuery</span>
                            <span className="tag">GraphQL</span><span className="tag">Serverless</span>
                            <span className="tag">Terraform</span><span className="tag">JUnit</span>
                        </div>
                    </div>

                    <div className="skill-row">
                        <div className="skill-label">Databases &amp; Data</div>
                        <div className="skill-tags">
                            <span className="tag">PostgreSQL</span><span className="tag">MySQL</span>
                            <span className="tag">Oracle SQL</span><span className="tag">Elasticsearch</span>
                            <span className="tag">Redis</span><span className="tag">Kafka</span>
                            <span className="tag">SOLR</span><span className="tag">H2</span>
                        </div>
                    </div>

                    <div className="skill-row">
                        <div className="skill-label">Cloud &amp; DevOps</div>
                        <div className="skill-tags">
                            <span className="tag">AWS Lambda</span><span className="tag">AppSync</span>
                            <span className="tag">S3</span><span className="tag">SES</span>
                            <span className="tag">Git</span><span className="tag">CI/CD</span>
                            <span className="tag">Docker</span><span className="tag">IntelliJ</span>
                        </div>
                    </div>

                    <div className="skill-row">
                        <div className="skill-label">Project Tools</div>
                        <div className="skill-tags">
                            <span className="tag">Jira</span><span className="tag">Confluence</span>
                            <span className="tag">VSTS</span><span className="tag">Rally</span>
                        </div>
                    </div>

                </div>
            </section>


            <section>
                <div className="section-label">Engineering Experience</div>

                <div className="job">
                    <div className="job-header">
                        <div>
                            <div className="job-title">Senior Software Engineer — Onboard Financial Systems</div>
                            <div className="job-company">Princess Cruises</div>
                        </div>
                        <div className="job-meta">
                            <div>Los Angeles, CA</div>
                            <div>Dec 2024 – Present</div>
                        </div>
                    </div>
                    <ul className="job-bullets">
                        <li>Enhanced architecture of onboard financial systems for cruise ships handling $10M+ in weekly
                            transactions across multiple financial areas.
                        </li>
                        <li>Led modernization of guest account management platform, reducing discrepancies and front
                            desk inquiry volume by 15%.
                        </li>
                        <li>Designed and maintained high-throughput data synchronization pipeline ensuring financial
                            record consistency between onboard systems and corporate ERP across intermittent satellite
                            connectivity.
                        </li>
                    </ul>
                </div>

                <div className="job">
                    <div className="job-header">
                        <div>
                            <div className="job-title">Senior Software Engineer — Fleet Management</div>
                            <div className="job-company">John Deere Inc.</div>
                        </div>
                        <div className="job-meta">
                            <div>Remote</div>
                            <div>Jul 2022 – Sep 2024</div>
                        </div>
                    </div>
                    <ul className="job-bullets">
                        <li>Designed and owned high-throughput REST APIs supporting CRUD operations at scale, ensuring
                            reliability for mission-critical fleet data workflows.
                        </li>
                        <li>Architected a fault-tolerant, containerized message processing service capable of handling
                            bursty workloads without data loss, improving system resilience across distributed
                            environments.
                        </li>
                        <li>Delivered internal tooling surfacing real-time machine state and historical diagnostics,
                            significantly reducing mean time-to-resolution for support teams.
                        </li>
                    </ul>
                </div>

                <div className="job">
                    <div className="job-header">
                        <div>
                            <div className="job-title">Data Integration Developer</div>
                            <div className="job-company">InvestCloud Inc.</div>
                        </div>
                        <div className="job-meta">
                            <div>Los Angeles, CA</div>
                            <div>Jan 2021 – Jul 2022</div>
                        </div>
                    </div>
                    <ul className="job-bullets">
                        <li>Built customer-facing APIs and end-to-end data integration pipelines ingesting from
                            disparate sources into data warehouses, enabling automated client reporting at scale.
                        </li>
                        <li>Drove cross-functional alignment across multiple concurrent stakeholder workstreams,
                            consistently delivering to scope and timeline in a fast-paced fintech environment.
                        </li>
                    </ul>
                </div>

                <div className="job">
                    <div className="job-header">
                        <div>
                            <div className="job-title">Software Engineering Intern — Commerce</div>
                            <div className="job-company">Ticketmaster Inc.</div>
                        </div>
                        <div className="job-meta">
                            <div>Los Angeles, CA</div>
                            <div>May – Sep 2019</div>
                        </div>
                    </div>
                    <ul className="job-bullets">
                        <li>Extended existing grouping features into the company's B2B platform, shipping full-stack
                            changes across a GraphQL/serverless architecture.
                        </li>
                        <li>Automated monthly and weekly Excel report generation and distribution for non-technical
                            stakeholders, eliminating manual effort across business teams.
                        </li>
                    </ul>
                </div>

                <div className="job">
                    <div className="job-header">
                        <div>
                            <div className="job-title">Software Engineering Intern — Commerce</div>
                            <div className="job-company">Ticketmaster Inc.</div>
                        </div>
                        <div className="job-meta">
                            <div>Los Angeles, CA</div>
                            <div>May – Sep 2018</div>
                        </div>
                    </div>
                    <ul className="job-bullets">
                        <li>Engineered a secure RESTful service exposing event grouping capabilities and extensible
                            metadata to event managers, laying the foundation for future UI development.
                        </li>
                        <li>Implemented full OAuth 2.0 compliance including JWT-based authentication, hardening the
                            service against unauthorized access.
                        </li>
                        <li>Established CI/CD pipelines and infrastructure-as-code for cloud deployments, bringing
                            production-grade DevOps practices to the intern project.
                        </li>
                    </ul>
                </div>

            </section>

        </div>

    )
}
