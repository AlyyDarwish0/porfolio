import React from "react";
import Heading from "./ui/Heading";
import SectionContainer from "./ui/SectionContainer";
import { HoverEffect } from "./ui/CardHoverEffect";

const Toolbox = () => {
	return (
		<SectionContainer id='toolbox'>
			<Heading title='Tool' titleSpan='Box' />
			<HoverEffect items={toolbox} />
		</SectionContainer>
	);
};

const toolbox = [
	{ icon: "/images/logos/python.svg", title: "Python", link: "https://www.python.org/" },
	{ icon: "/images/logos/java.svg", title: "Java", link: "https://www.java.com/" },
	{ icon: "/images/logos/c.svg", title: "C", link: "https://en.wikipedia.org/wiki/C_(programming_language)" },
	{ icon: "/images/logos/cpp.svg", title: "C++", link: "https://isocpp.org/" },
	{ icon: "/images/logos/assembly.svg", title: "Assembly", link: "https://en.wikipedia.org/wiki/Assembly_language" },
	{ icon: "/images/logos/html.svg", title: "HTML", link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
	{ icon: "/images/logos/css.svg", title: "CSS", link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
	{ icon: "/images/logos/javascript.svg", title: "JavaScript", link: "https://www.javascript.com/" },
	{ icon: "/images/logos/mongodb.svg", title: "MongoDB", link: "https://www.mongodb.com/" },
	{ icon: "/images/logos/sql.svg", title: "SQL", link: "https://en.wikipedia.org/wiki/SQL" },
	{ icon: "/images/logos/sqlite.svg", title: "SQLite", link: "https://www.sqlite.org/" },
	{ icon: "/images/logos/mysql.svg", title: "MySQL", link: "https://www.mysql.com/" },
	{ icon: "/images/logos/postgresql.svg", title: "PostgreSQL", link: "https://www.postgresql.org/" },
	{ icon: "/images/logos/django.svg", title: "Django", link: "https://www.djangoproject.com/" },
	{ icon: "/images/logos/opencv.svg", title: "OpenCV", link: "https://opencv.org/" },
	{ icon: "/images/logos/aws.svg", title: "Amazon Web Services (AWS)", link: "https://aws.amazon.com/" },
	{ icon: "/images/logos/git.svg", title: "GIT", link: "https://git-scm.com/" },
	{ icon: "/images/logos/linux.svg", title: "Linux", link: "https://www.linux.org/" },
	{ icon: "/images/logos/wireshark.svg", title: "Wireshark", link: "https://www.wireshark.org/" },
	{ icon: "/images/logos/cisco.svg", title: "Cisco Packet Tracer", link: "https://www.netacad.com/courses/packet-tracer" },
	{ icon: "/images/logos/burpsuite.svg", title: "Burp Suite", link: "https://portswigger.net/burp" },
	{ icon: "/images/logos/nmap.svg", title: "Nmap", link: "https://nmap.org/" },
	{ icon: "/images/logos/metasploit.png", title: "Metasploit", link: "https://www.metasploit.com/" },
	{ icon: "/images/logos/jtr.webp", title: "John The Ripper", link: "https://www.openwall.com/john/" },
	{ icon: "/images/logos/kali.png", title: "Kali Linux", link: "https://www.kali.org/" },
];

export default Toolbox;
