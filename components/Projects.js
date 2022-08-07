import React, { useEffect, useState } from 'react'

import { Eye } from 'tabler-icons-react';
import { sanityClient } from '../sanity'
import {
    Card,
    Image,
    Text,
    Group,
    Badge,
    Button,
    ActionIcon,
    createStyles
} from '@mantine/core';
import { urlForThumbnail } from '../image';
import { BrandGithub } from 'tabler-icons-react';
import { Code } from 'tabler-icons-react';
import { Link } from '@mui/material';
const useStyles = createStyles((theme) => ({
    card: {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    },

    section: {
        borderBottom: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
            }`,
        paddingLeft: theme.spacing.md,
        paddingRight: theme.spacing.md,
        paddingBottom: theme.spacing.md,
    },

    like: {
        color: theme.colors.red[6],
    },

    label: {
        textTransform: 'uppercase',
        fontSize: theme.fontSizes.xs,
        fontWeight: 700,
    },
}));



function Projects() {
    const { classes, theme } = useStyles();
    const [project, setProject] = useState()
    useEffect(() => {
        const fetchData = async () => {
            try {

                const projects = await sanityClient.fetch(`*[_type == "project" ]`);
                setProject(projects)
            } catch (err) {
                console.log("error")
            }
        };
        fetchData()
    }, []);
    console.log(project)

    return (
        <div className="lg:grid lg:grid-cols-2 lg:gap-2 lg:justify-items-center sm:ml-10 mt-10  ">

            {project?.map(item => (
                <Card withBorder radius="md" p="md" className=' drop-shadow-lg' style={{ maxWidth: "400px", minWidth: "400px", maxHeight: "470px", minHeight: "470px", marginBottom: "30px" }} key={item.title}>
                    <Card.Section>
                        <Image src={urlForThumbnail(item.image)} height={180} />
                    </Card.Section>

                    <Card.Section className={classes.section} mt="md">
                        <Group position="apart">
                            <Text size="lg" weight={500}>
                                {item.title}
                            </Text>
                            <Badge size="sm">Omar Labdaoui</Badge>
                        </Group>
                        <Text size="sm" mt="xs">
                            {item.desc}
                        </Text>
                    </Card.Section>

                    <Card.Section className={classes.section}>
                        <Text mt="md" className={classes.label} color="dimmed">
                            Technologies Used
                        </Text>
                        <Group spacing={7} mt={5}>
                            {item.Technologies.map((tech) => (
                                <Badge key={tech} variant="gradient" gradient={{ from: 'teal', to: 'blue', deg: 60 }}>{tech}</Badge>
                            ))}
                        </Group>
                    </Card.Section>

                    <div className='flex flex-row text-center justify-evenly mt-5'>
                        <div className='flex fex-row text-center font-semibold bg-blue-600 text-white rounded-md p-2 drop-shadow-md hover:scale-125 ease-in-out duration-300 cursor-pointer'>
                            <Code />
                            <Link className='text-white' style={{ textDecoration: "none", color: "white" }} href={item.link} target="_blank"><button className='ml-1' >
                                Code
                            </button>
                            </Link>
                        </div>
                        <div className='flex fex-row text-center font-semibold bg-slate-800 text-white rounded-md p-2 drop-shadow-md hover:scale-125 ease-in-out duration-300 cursor-pointer'>
                            <Eye />
                            <Link className='text-white' style={{ textDecoration: "none", color: "white" }} href={item.previewLink} target="_blank"><button className='ml-1' >
                                Preview
                            </button></Link>

                        </div>
                    </div>
                </Card>
            ))
            }


        </div >
    );
}
export default Projects