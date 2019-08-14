import React from 'react';
import './Resume.css';

export class Resume extends React.Component {
    render() {
        return (
            <div className="Resume">
                <table>
                    <tr>
                        <th colSpan={4}>
                            <p className="Title">Ferrin Katz</p>
                            <p className="Center">(323) 854-7793</p>
                            <p className="Center">ferrinkatz@ferrinkatz.com</p>
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
                            <p>GPA: 3.1/4.0</p>
                        </td>
                    </tr>
                    <tr>
                        <td className="Section-Header">
                            <p>RELAVENT EXPERIENCE</p>
                        </td>
                        <td colSpan={3}>
                            <p>Operating Systems, File systems & Databases, Organization of Programming languages, Analysis and Design of Software Systems, Software Quality Assurance</p>
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
                            <p className="Section-Header"> </p>
                        </td>
                        <td colSpan={3}>
                            <ul>
                                <li>Integrated the previously built grouping features into the companies B2B platform. (Using React, GraphQL, AWS App Sync, AWS Lambdas, JavaScript, and Request-Promise).</li>
                                <li>Created a tool to generate and send monthly and weekly Excel reports to non tech teams. (Using AWS Lambdas, Java, Apache POI, AWS S3, and AWS SES)</li>
                            </ul>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <p className="Section-Header"> </p>
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
                            <p className="Section-Header"> </p>
                        </td>
                        <td colSpan={3}>
                            <ul>
                                <li>Implemented a secure Restful Web Service to give event managers access to event grouping features and add metadata for a future UI (using Java, Spring Boot, Spring JPA, H2, Kafka, ELK, and Swagger).</li>
                                <li>Added a fully OAuth 2 compliant login feature to my event grouping service (Using Spring Security, Spring Oauth2, and Spring JWT).</li>
                                <li>Deployed services to AWS with Gitlab Continuous integration, Docker, and Hashicorp Terraform.</li>
                            </ul>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <p className="Section-Header"> </p>
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
                            <p className="Section-Header"> </p>
                        </td>
                        <td colSpan={3}>
                            <ul>
                                <li>Integrated the previously built grouping features into the companies B2B platform. (Using React, GraphQL, AWS App Sync, AWS Lambdas, JavaScript, and Request-Promise).</li>
                                <li>Created a tool to generate and send monthly and weekly Excel reports to non tech teams. (Using AWS Lambdas, Java, Apache POI, AWS S3, and AWS SES)</li>
                            </ul>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <p className="Section-Header"> </p>
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
                            <p className="Section-Header"> </p>
                        </td>
                        <td colSpan={3}>
                            <ul>
                                <li>Integrated the previously built grouping features into the companies B2B platform. (Using React, GraphQL, AWS App Sync, AWS Lambdas, JavaScript, and Request-Promise).</li>
                                <li>Created a tool to generate and send monthly and weekly Excel reports to non tech teams. (Using AWS Lambdas, Java, Apache POI, AWS S3, and AWS SES)</li>
                            </ul>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <p className="Section-Header"> </p>
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
                            <p className="Section-Header"> </p>
                        </td>
                        <td colSpan={3}>
                            <ul>
                                <li>Integrated the previously built grouping features into the companies B2B platform. (Using React, GraphQL, AWS App Sync, AWS Lambdas, JavaScript, and Request-Promise).</li>
                                <li>Created a tool to generate and send monthly and weekly Excel reports to non tech teams. (Using AWS Lambdas, Java, Apache POI, AWS S3, and AWS SES)</li>
                            </ul>
                        </td>
                    </tr>
                </table>
            </div>
        )
    }
}
