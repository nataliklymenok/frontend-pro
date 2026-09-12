import {
  Box,
  Chip,
  Container,
  Divider,
  Link,
  List,
  ListItem,
  Stack,
  Typography,
} from "@mui/material";

const experience = [
  {
    role: "Frontend Developer React",
    company: "Luxoft",
    period: "11/23 – 05/26",
    duties: [
      "Developed and maintained web application features using React and JavaScript",
      "Built a booking system with a calendar interface for reserving test rigs and managing their availability",
      "Implemented new UI functionality and enhanced existing features based on business requirements",
      "Developed functionality for creating and managing automated test cases through the UI",
      "Integrated frontend components with backend APIs and worked with application data stored in the database",
      "Implemented forms, validation, state management, and user interactions",
      "Investigated and resolved frontend issues and improved existing React components",
      "Collaborated with backend developers and QA engineers throughout feature development and testing.",
    ],
  },
  {
    role: "Automation/Manual QA Engineer",
    company: "Luxoft",
    period: "05/22 – 10/23",
    duties: ["Manual/Automation testing of JohnDeer webtool"],
  },
  {
    role: "Automation QA Engineer Python",
    company: "Luxoft",
    period: "05/20 – 03/23",
    duties: [
      "Automation testing of Python microservices",
      "Performance testing with Locust",
    ],
  },
  {
    role: "Automation QA Engineer C#",
    company: "Luxoft",
    period: "05/19 – 05/20",
    duties: [
      "Automation testing of Web insurance application",
      "Requirements analysis and test cases creation",
    ],
  },
  {
    role: "Automation QA Engineer",
    company: "SoftServe",
    period: "08/17 – 05/19",
    duties: [
      "Automation testing of Windows/Mac desktop application Sourcetree",
      "Requirements analysis and test cases creation",
      "Manual testing of Sourcetree",
    ],
  },
  {
    role: "QA Engineer",
    company: "Mauris",
    period: "01/17 – 07/17",
    duties: [
      "Manual testing of mobile apps and websites",
      "Bug reporting via Jira",
      "Requirements creation and communication with client",
    ],
  },
  {
    role: "QA Engineer",
    company: "Varg Technologies",
    period: "09/16 – 12/16",
    duties: [
      "Manual testing of mobile app",
      "API monitoring and testing via Runscope",
      "Creating automated test cases using Behat (API testing)",
      "Working with admin panel",
      "Creating user stories for MVP",
    ],
  },
  {
    role: "QA Engineer",
    company: "Room8Studio",
    period: "05/16 – 09/16",
    duties: [
      "Manual testing of mobile game",
      "Testing via Unity3D",
      "Creating test cases",
    ],
  },
  {
    role: "Junior QA Engineer",
    company: "Luxoft",
    period: "10/15 – 04/16",
    duties: [
      "Manual testing of mobile application",
      "Working with project test documentation",
      "Development of Test Scenarios",
      "Take part in Story team meetings (requirements analysis)",
    ],
  },
];

const education = [
  {
    period: "04/26 – 09/26",
    title: "Frontend Pro - Hillel IT school",
  },
  {
    period: "05/22 – 07/22",
    title: "Python Basic - Hillel IT school",
  },
  {
    period: "03/17 – 06/17",
    title: "Automation QC (Python) - IT Academy SoftServe",
  },
  { period: "09/16 – 10/16", title: 'QA Automation course "Prog.Kiev.ua"' },
  { period: "03/16 – 07/16", title: 'Java Programming course "Brain Academy"' },
  { period: "05/16", title: "SQL for Testers course, Luxoft" },
  {
    period: "01/15 – 02/15",
    title: "Software Testing course, ITLabs, Kyiv, Ukraine",
  },
  {
    period: "09/08 – 06/13",
    title:
      'Specialist degree, "Enterprise economy", National Technical University of Ukraine "Kyiv Polytechnic Institute"',
  },
];

const skillGroups = [
  {
    label: "Programming Languages / Technologies",
    value: "JavaScript, TypeScript, React, ReduxToolkit, C# .Net, Python",
  },
  { label: "Database", value: "MySQL, Postgress" },
  { label: "CI", value: "Jenkins, TeamCity" },
  { label: "Methodologies", value: "Scrum, Kanban" },
  { label: "Testing Tools", value: "TestRail, Jira, Zephyr" },
  {
    label: "Development Tools",
    value: "VS Code, VisualStudio, XCode, Unity3D, IntelliJ IDEA, PyCharm",
  },
  {
    label: "Automation Tools",
    value: "NUnit, TestStack.White, Selenium WebDriver, Maven, XCTest",
  },
  { label: "Performance Testing Tool", value: "Locust" },
  { label: "Version Control System", value: "Git" },
  { label: "Language", value: "English: Intermediate" },
];

const skillChips = skillGroups.flatMap((group) =>
  group.value.split(",").map((s) => s.trim()),
);

const CV = () => {
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Klymenok Nataliia
      </Typography>

      <Stack spacing={0.5} sx={{ mb: 4 }}>
        <Typography variant="body2">Phone: +38 (066) 995-98-46</Typography>
        <Typography variant="body2">
          Email:{" "}
          <Link href="mailto:nklymenok@gmail.com">nklymenok@gmail.com</Link>
        </Typography>
        <Typography variant="body2">
          LinkedIn:{" "}
          <Link
            href="https://ua.linkedin.com/in/nataliia-klymenok"
            target="_blank"
            rel="noreferrer"
          >
            nataliia-klymenok
          </Link>
        </Typography>
      </Stack>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" component="h3" gutterBottom>
          Skills
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <Stack direction="row" useFlexGap spacing={1} sx={{ flexWrap: "wrap" }}>
          {skillChips.map((skill) => (
            <Chip key={skill} label={skill} size="small" />
          ))}
        </Stack>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" component="h3" gutterBottom>
          Professional Experience
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <Stack spacing={3}>
          {experience.map((job) => (
            <Box key={`${job.company}-${job.period}`}>
              <Stack
                direction="row"
                justifyContent="space-between"
                gap={1}
                sx={{ flexWrap: "wrap" }}
              >
                <Typography variant="subtitle1" fontWeight={600}>
                  {job.role} — {job.company}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {job.period}
                </Typography>
              </Stack>
              <List dense disablePadding sx={{ listStyle: "disc", pl: 3 }}>
                {job.duties.map((duty) => (
                  <ListItem
                    key={duty}
                    sx={{ display: "list-item", py: 0.25, pl: 0 }}
                  >
                    <Typography variant="body2">{duty}</Typography>
                  </ListItem>
                ))}
              </List>
            </Box>
          ))}
        </Stack>
      </Box>

      <Box>
        <Typography variant="h6" component="h3" gutterBottom>
          Education & Training
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <Stack spacing={1}>
          {education.map((item) => (
            <Typography variant="body2" key={item.title}>
              <Typography component="span" color="text.secondary">
                {item.period}
              </Typography>{" "}
              {item.title}
            </Typography>
          ))}
        </Stack>
      </Box>
    </Container>
  );
};

export default CV;
