import React, { useState } from 'react'
import { createStyles, Title, SimpleGrid, Text, Button, ThemeIcon, Grid, Col } from '@mantine/core';
import CodeIcon from '@mui/icons-material/Code';
import { Transition } from '@mantine/core';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
const useStyles = createStyles((theme) => ({
    wrapper: {
        padding: `${theme.spacing.xl * 2}px ${theme.spacing.xl}px`,
    },

    title: {
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        fontSize: 36,
        fontWeight: 900,
        lineHeight: 1.1,
        marginBottom: theme.spacing.md,
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    },
}));

const features = [
    {
        Icon: IntegrationInstructionsIcon,
        title: 'FrontEnd',
        description: 'I develop full-blown web apps using React, Next and Tailwind Css  ',
    },
    {
        Icon: CodeIcon,
        title: 'Backend',
        description: 'I develop full-blown Backend web apps using Nodejs Express (MERN Stack) ',
    },
    {
        Icon: DeveloperModeIcon,
        title: 'Web App Development',
        description:
            ' I develop full-blown apps using React Native (Tailwind Css) ',
    },

];
function Services() {
    const { classes } = useStyles();
    const [opened, setOpened] = useState(false);
    const items = features.map((feature) => (

        <div key={feature.title} className='sm:mb-5 rounded-md text-center hover:border border-gray-500 hover:bg-[#2e2f36] cursor-pointer p-5 ease-in duration-300 hover:translate-y-6 mr-5'>
            <ThemeIcon
                size={44}
                radius="md"
                variant="gradient"
                gradient={{ deg: 133, from: 'blue', to: 'cyan' }}
            >
                <feature.Icon />
            </ThemeIcon>
            <Text size="lg" mt="sm" weight={500} className="text-white ">
                {feature.title}
            </Text>
            <Text color="dimmed" size="sm">
                {feature.description}
            </Text>
        </div>

    ));

    return (

        <div className={classes.wrapper}>
            <div className='lg:flex  '>
                {items}
            </div>
        </div>
    );
}

export default Services