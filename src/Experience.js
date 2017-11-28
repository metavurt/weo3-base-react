import React, { Component } from "react";

class Experience extends React.Component {
    render() {
        return (
            <section class="resume">
            {/* <p ><strong>place - <em>position</em> :: month.year - month.year</strong></p>
                <p>description</p> */}
            <ul class="experience">
                <li class="year">
                    <p>2017</p>
                    <ul class="engagements">
                        <li>
                            <p><strong>weo3 dev &amp; design</strong> - <em>Contract Front End Developer</em></p>
                            <p>Created and delivered css, js, and php solutions for theme sites, site launches, and site additions.</p>
                            <p><strong>Skills</strong>: HTML, CSS, PHP, JavaScript</p>
                        </li>
                        <li>
                            <p><strong>Meredith Xcelerated Marketing</strong> - <em>Front End Developer</em></p>
                            <p>Refactor legacy markup and styles; build and launch new storefront components.</p>
                            <p><strong>Skills</strong>: HTML, CSS, Sass, Freemarker</p>
                        </li>
                    </ul>
                </li>
                <li class="year">
                    <p>2016</p>
                    <ul class="engagements">
                        <li>
                            <p><strong>Ideation, LLC</strong> - <em>Front End Developer</em></p>
                            <p>Assisted with development and launch of LA84.org.</p>
                            <p><strong>Skills</strong>: Wordpress, CSS, JavaScript</p>
                        </li>
                        <li>
                            <p><strong>Second City Farms, LLC</strong> - <em>Founder</em></p>
                            <p>Investigation, discovery, research and development into viability of becoming Chicago's best source of locally-grown, pesticide-free, year-round herbs and leafy greens.</p>
                            <p><strong>Skills</strong>: Aquaponics, hydroponics, indoor farming, plant management</p>
                        </li>
                    </ul>
                </li>
                <li class="year">
                    <p>2013 &ndash; 2015</p>
                    <ul class="engagements">
                        <li>
                            <p><strong>Tahoe Partners</strong> - <em>Senior Front End Developer</em></p>
                            <p>Responsive framework and mobile integration with SharePoint; Wordpress websites.</p>
                            <p><strong>Skills</strong>: HTML, CSS, JavaScript, Grunt, Node, Handlebars, Git</p>
                        </li>
                    </ul>
                </li>
                <li class="year">
                    <p>2013</p>
                    <ul class="engagements">
                        <li>
                            <p><strong>Art Institute of Chicago</strong> - <em>Front End Developer</em></p>
                            <p>Create landing pages, campaign sites and associated materials, animations, banner ads.</p>
                            <p><strong>Skills</strong>: HTML, CSS, JavaScript, jQuery, Flash, Ruby on Rails, Git</p>
                        </li>
                        <li>
                            <p><strong>Panduit</strong> – <em>Lead Front End Developer</em></p>
                            <p>Full site rebuild, using client’s custom CMS.</p>
                            <p><strong>Skills</strong>: HTML, CSS, JavaScript, jQuery, Git</p>
                        </li>
                    </ul>
                </li>
                <li class="year">
                    <p>2011 &ndash; 2012</p>
                    <ul class="engagements">
                        <li>
                            <p><strong>Design Kitchen</strong> – <em>Front End Developer</em></p>
                            <p>Templating, creating and styling microsites for HP, Booth, and Motorola.</p>
                            <p><strong>Skills</strong>: HTML, CSS, JavaScript, jQuery, Flash, Ruby, Coffee, Git</p>
                        </li>
                    </ul>
                </li>
                <li class="year">
                    <p>2011</p>
                    <ul class="engagements">
                        <li>
                            <p><strong>Acquity Group</strong> – <em>Front End Developer</em></p>
                            <p>Enriched, updated and expanded client sites.</p>
                            <p><strong>Skills</strong>: HTML, CSS, JavaScript, jQuery, SVN</p>
                        </li>
                    </ul>
                </li>
                <li class="year">
                    <p>2009 &ndash; 2011</p>
                    <ul class="engagements">
                        <li>
                            <p><strong>Y&amp;R</strong> – <em>Flash Animator & Developer</em></p>
                            <p>Banners. Standard, rich media, encoding Flash video, with an occasional micro-site.</p>
                            <p><strong>Skills</strong>: HTML, CSS, ActionScript 3.0, GSAP</p>
                        </li>
                    </ul>
                </li>
                <li class="year">
                    <p>2008 &ndash; 2009</p>
                    <ul class="engagements">
                        <li>
                            <p><strong>Leo Burnett</strong> – <em>Flash Developer & Designer</em></p>
                            <p>Created CDs, banners, widgets and video players for Marlboro, McDonald’s, Purina, Kellogg’s and Whirlpool.</p>
                            <p><strong>Skills</strong>: ActionScript 3.0, GSAP</p>
                        </li>
                    </ul>
                </li>
                <li class="year">
                    <p>2007</p>
                    <ul class="engagements">
                        <li>
                            <p><strong>Digital Bootcamp</strong> – <em>Flash Instructor</em></p>
                            <p>Taught students basic programming to advanced OOP concepts.</p>
                            <p><strong>Skills</strong>: ActionScript 3.0, OOP concepts, MVC architecture, programmatic animation.</p>
                        </li>
                        <li>
                            <p><strong>Whitman-Hart</strong> – <em>Flash Developer</em></p>
                            <p>Built all Appliance Finder modules for Sears.</p>
                            <p><strong>Skills</strong>: ActionScript 3.0, GSAP, XML</p>
                        </li>
                    </ul>
                </li>
                <li class="year">
                    <p>2006</p>
                    <ul class="engagements">
                        <li>
                            <p><strong>ShopLocal</strong> – <em>Flash Developer</em></p>
                            <p>Designed and produced geo-centric, dynamic-data ad banners for local clients.</p>
                            <p><strong>Skills</strong>: ActionScript 3.0, GSAP, XML, .NET</p>
                        </li>
                    </ul>
                </li>
                <li class="year">
                    <p>2005 &ndash; 2006</p>
                    <ul class="engagements">
                        <li>
                            <p><strong>Evite</strong> – <em>Front End Designer and Developer</em></p>
                            <p>Built and launched new-branded Evite, entire site rebuild.</p>
                            <p><strong>Skills</strong>: HTML, CSS, JavaScript</p>
                        </li>
                        <li>
                            <p><strong>Deutsch LA</strong> – <em>Flash Developer</em></p>
                            <p>Built Flash mini games (poker, shooter, chance) for TGI Friday's campaigns.</p>
                            <p><strong>Skills</strong>: ActionScript 2.0, GSAP, XML</p>
                        </li>
                        <li>
                            <p><strong>Genex</strong> – <em>Front End Designer and Developer</em></p>
                            <p>Built and launched campaign sites for each of Acura's models</p>
                            <p><strong>Skills</strong>: HTML, CSS, XML</p>
                        </li>
                    </ul>
                </li>
                <li class="year">
                    <p>2002 &ndash; 2004</p>
                    <ul class="engagements">
                        <li>
                            <p><strong>Highland Solutions</strong> – <em>PHP Developer, Flash Developer</em></p>
                            <p>Built and launched online B2B credit card POS systems purchasing and licensing application.</p>
                            <p><strong>Skills</strong>: PHP, MySQL, JavaScript, ActionScript 2.0</p>
                        </li>
                    </ul>
                </li>
                <li class="year">
                    <p>2000 &ndash; 2002</p>
                    <ul class="engagements">
                        <li>
                            <p><strong>Park Community Church</strong> – <em>Webmaster</em></p>
                            <p>Built and launched website with custom-built CMS; Flash website with PHP/MySQL backend.</p>
                            <p><strong>Skills</strong>: HTML, CSS, JavaScript, PHP, MySQL, database creation and normalization, ActionScript 1.0</p>
                        </li>
                    </ul>
                </li>
                <li class="year">
                    <p>1999</p>
                    <ul class="engagements">
                        <li>
                            <p><strong>Freezone</strong> – <em>Chat monitor</em></p>
                            <p>Monitored kids' online chat rooms for inappropriate behavior (shaming, name-calling, etc) and for predators.</p>
                            <p><strong>Skills</strong>: Communication, using a proprietary chat messaging system.</p>
                        </li>
                    </ul>
                </li>
                <li class="year">
                    <p>1997 &ndash; 1998</p>
                    <ul class="engagements">
                        <li>
                            <p><strong>Screenz</strong> – <em>Screenz "Explorer"</em></p>
                            <p>Helped manage and maintain storefront, assisted users with various computer-use tasks.</p>
                            <p><strong>Skills</strong>: Communication. Patience. Lots and lots of patience.</p>
                        </li>
                        <li>
                            <p><strong>weo3 dev and design</strong> – <em>Founder, developer, designer</em></p>
                            <p>Built sites for boutique businesses, musicians, and artists</p>
                            <p><strong>Skills</strong>: HTML, CSS, JavaScript, PHP, MySQL, Photoshop, Illustrator</p>
                        </li>
                    </ul>
                </li>
                <li class="year">
                    <p>1995 &ndash; 1998</p>
                    <ul class="engagements">
                        <li>
                            <p><strong>The 3rd Coast Café on Delaware</strong> – <em>Manager, Trainer, Bartender, Barista</em></p>
                            <p>Managed, hired, fired, and trained FOH and BOH staff. Maintained inventory. Presided over chaos.</p>
                            <p><strong>Skills</strong>: Wine assessment and markup, European barista, communication, corralling cats.</p>
                        </li>
                    </ul>
                </li>
            </ul>
        </section>

        );
    }
}

export default Experience
