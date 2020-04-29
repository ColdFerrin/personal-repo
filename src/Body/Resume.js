import React from 'react';
import './Resume.css';

export class Resume extends React.Component {
    render() {
        return (
            <div className="Resume">
                <table>
                    <tbody>
                    <tr>
                        <th colSpan={4}>
                            <p className="Title">Ferrin Katz</p>
                        </th>
                    </tr>
                    <tr>
                        <td className="Section-Header">
                            <p>EDUCATION</p>
                        </td>
                        <td colSpan={2}>
                            <p>Embry-Riddle Aeronautical University (ERAU)</p>
                            <p><b>Bachelor of Science, Software Engineering</b></p>
                            <p>Area of Concentration: Cyber Security</p>
                        </td>
                        <td className="Section-Info">
                            <p>Prescott, AZ</p>
                            <p>May 2020</p>
                        </td>
                    </tr>
                    <tr>
                        <td className="Section-Header">
                            <p>RELAVENT EXPERIENCE</p>
                        </td>
                        <td colSpan={3}>
                            <p>Operating Systems, File systems & Databases, Organization of Programming languages,
                                Analysis and Design of Software Systems, Software Quality Assurance</p>
                        </td>
                    </tr>


                    <tr>
                        <td className="Section-Header">
                            <p>SKILLS</p>
                        </td>
                        <td>
                            <p><i>Programming Languages:</i></p>
                        </td>
                        <td colSpan={2} className="Section-Info">
                            <p>Java, C++, C, C#, Python, JavaScript, MySQL, PostgreSQL, HTML, CSS, MATLAB, Lisp, Bash,
                                GraphQL</p>
                        </td>
                    </tr>
                    <tr>
                        <td className="Section-Header">
                            <p></p>
                        </td>
                        <td>
                            <p><i>Libraries:</i></p>
                        </td>
                        <td colSpan={2} className="Section-Info">
                            <p>Spring, Spring Boot, Spring JPA, Hibernate, Spring Security, jQuery, React, Serverless,
                                AWS API</p>
                        </td>
                    </tr>
                    <tr>
                        <td className="Section-Header">
                            <p></p>
                        </td>
                        <td>
                            <p><i>Databases:</i></p>
                        </td>
                        <td colSpan={2} className="Section-Info">
                            <p>PostgreSQL, MySQL, Elasticsearch, Redis, Kafka, H2</p>
                        </td>
                    </tr>
                    <tr>
                        <td className="Section-Header">
                            <p></p>
                        </td>
                        <td>
                            <p><i>Tools:</i></p>
                        </td>
                        <td colSpan={2} className="Section-Info">
                            <p>Git, Emma, Kafka Connect, AWS, Lambdas, App Sync, S3, SES</p>
                        </td>
                    </tr>
                    <tr>
                        <td className="Section-Header">
                            <p></p>
                        </td>
                        <td>
                            <p><i>IDEs:</i></p>
                        </td>
                        <td colSpan={2} className="Section-Info">
                            <p>Intellij, Visual Studio, Eclipse</p>
                        </td>
                    </tr>
                    <tr>
                        <td className="Section-Header">
                            <p></p>
                        </td>
                        <td>
                            <p><i>Operating Systems:</i></p>
                        </td>
                        <td colSpan={2} className="Section-Info">
                            <p>Windows, Linux/Unix, Mac OS</p>
                        </td>
                    </tr>
                    <tr>
                        <td className="Section-Header">
                            <p></p>
                        </td>
                        <td>
                            <p><i>Office Software:</i></p>
                        </td>
                        <td colSpan={2} className="Section-Info">
                            <p>Confluence, Jira, Office Suite</p>
                        </td>
                    </tr>
                    <tr>
                        <td className="Section-Header">
                            <p></p>
                        </td>
                        <td>
                            <p><i>Languages:</i></p>
                        </td>
                        <td colSpan={2} className="Section-Info">
                            <p>Russian (Conversational)</p>
                        </td>
                    </tr>


                    <tr>
                        <td>
                            <p className="Section-Header">ENGINEERING EXPERIENCE</p>
                        </td>
                        <td colSpan={2}>
                            <p><i>Live Nation Inc.</i></p>
                            <p><b>Tech Intern,</b> Software Engineering, Commerce – Ticketmaster</p>
                        </td>
                        <td>
                            <p>Los Angeles, CA</p>
                            <p>Summer 2019</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p className="Section-Header"></p>
                        </td>
                        <td colSpan={3}>
                            <ul>
                                <li>Integrated the previously built grouping features into the companies B2B platform.
                                    (Using React, GraphQL, AWS App Sync, AWS Lambdas, JavaScript, and Request-Promise).
                                </li>
                                <li>Created a tool to generate and send monthly and weekly Excel reports to non tech
                                    teams. (Using AWS Lambdas, Java, Apache POI, AWS S3, and AWS SES)
                                </li>
                            </ul>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <p className="Section-Header"></p>
                        </td>
                        <td colSpan={2}>
                            <p><i>Live Nation Inc.</i></p>
                            <p><b>Tech Intern,</b> Software Engineering, Commerce – Ticketmaster</p>
                        </td>
                        <td>
                            <p>Los Angeles, CA</p>
                            <p>Summer 2018</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p className="Section-Header"></p>
                        </td>
                        <td colSpan={3}>
                            <ul>
                                <li>Implemented a secure Restful Web Service to give event managers access to event
                                    grouping features and add metadata for a future UI (using Java, Spring Boot, Spring
                                    JPA, H2, Kafka, ELK, and Swagger).
                                </li>
                                <li>Added a fully OAuth 2 compliant login feature to my event grouping service (Using
                                    Spring Security, Spring Oauth2, and Spring JWT).
                                </li>
                                <li>Deployed services to AWS with Gitlab Continuous integration, Docker, and Hashicorp
                                    Terraform.
                                </li>
                            </ul>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <p className="Section-Header"></p>
                        </td>
                        <td colSpan={2}>
                            <p><i>Live Nation Inc.</i></p>
                            <p><b>Tech Intern,</b> Software Engineering, Commerce – Ticketmaster</p>
                        </td>
                        <td>
                            <p>Los Angeles, CA</p>
                            <p>Summer 2017</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p className="Section-Header"></p>
                        </td>
                        <td colSpan={3}>
                            <ul>
                                <li>Developed full stack address verification service, (using Java, Spring Boot, Spring
                                    JPA, Hibernate, PostgreSQL, HTML, CSS, JavaScript, and jQuery) to address data
                                    processing need in the department.
                                </li>
                                <li>Created full stack tool to help Event Management teams verify the data they input
                                    was being correctly replicated in all remote data centers (using Java, Spring Boot,
                                    Spring JPA, Hibernate, Apache HTTP Client, MySQL, Redis, HTML, CSS, JavaScript, and
                                    jQuery).
                                </li>
                                <li>Deployed clustered micro-services to remote servers using Docker.</li>
                            </ul>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <p className="Section-Header"></p>
                        </td>
                        <td colSpan={2}>
                            <p><i>Everbridge Inc.</i></p>
                            <p><b>Development Operations Intern</b> - Operations</p>
                        </td>
                        <td>
                            <p>Glendale, CA</p>
                            <p>Summer 2015</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p className="Section-Header"></p>
                        </td>
                        <td colSpan={3}>
                            <ul>
                                <li>Developed add-ons to Confluence/Jira for the various development teams.</li>
                                <li>Managed Confluence/Jira to ensure peak reliability for the various users of the
                                    systems.
                                </li>
                                <li>Facilitated daily operations of the department including preparations for
                                    releases.
                                </li>
                            </ul>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <p className="Section-Header"></p>
                        </td>
                        <td colSpan={2}>
                            <p><i>Live Nation Inc.</i></p>
                            <p><b>Tech Intern,</b> Software Engineering, Commerce – Ticketmaster</p>
                        </td>
                        <td>
                            <p>Los Angeles, CA</p>
                            <p>Summer 2014</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p className="Section-Header"></p>
                        </td>
                        <td colSpan={3}>
                            <ul>
                                <li>Integrated the previously built grouping features into the companies B2B platform.
                                    (Using React, GraphQL, AWS App Sync, AWS Lambdas, JavaScript, and Request-Promise).
                                </li>
                                <li>Created a tool to generate and send monthly and weekly Excel reports to non tech
                                    teams. (Using AWS Lambdas, Java, Apache POI, AWS S3, and AWS SES)
                                </li>
                            </ul>
                        </td>
                    </tr>

                    <tr>
                        <td className="Section-Header">
                            <p>LEADERSHIP</p>
                        </td>
                        <td colSpan={3}>
                            <p>Data Collection Subsystem Team Lead, Eagle Aero Sport, 2018 – Present </p>
                            <p>Programming Adviser, ERAU VEX Robotics Club, 2018 - Present </p>
                            <p>President, Hillel, 2017 - 2018 </p>
                            <p>Team Leader, ERAU VEX Robotics Club Team White, 2016 - 2018 </p>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
