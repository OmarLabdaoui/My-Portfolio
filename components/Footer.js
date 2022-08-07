import { createStyles, Container, Group, ActionIcon } from '@mantine/core';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

import TwitterIcon from '@mui/icons-material/Twitter';

import { Link } from '@mui/material';
const useStyles = createStyles((theme) => ({
    footer: {
        marginTop: 120,
        borderTop: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
            }`,
    },

    inner: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: theme.spacing.xl,
        paddingBottom: theme.spacing.xl,

        [theme.fn.smallerThan('xs')]: {
            flexDirection: 'column',
        },
    },

    links: {
        [theme.fn.smallerThan('xs')]: {
            marginTop: theme.spacing.md,
        },
    },
}));

function Footer() {
    const { classes } = useStyles();

    return (

        <div className={classes.footer}>
            <Container className={classes.inner}>
                <h1 className='text-2xl font-bold text-sky-400 /100' >Portfolio</h1>
                <Group spacing={5} className={classes.links} position="right" noWrap>
                    <ActionIcon size="lg">
                        <Link className='text-white' style={{ textDecoration: "none", color: "white" }} href="https://twitter.com/OLabdaoui1" target="_blank"> <TwitterIcon size={18} stroke={1.5} /></Link>
                    </ActionIcon>
                    <ActionIcon size="lg">
                        <Link className='text-white' style={{ textDecoration: "none", color: "white" }} href="https://github.com/OmarLabdaoui" target="_blank"> <GitHubIcon size={18} stroke={1.5} /></Link>
                    </ActionIcon>
                    <ActionIcon size="lg">
                        <Link className='text-white'
                            style={{ textDecoration: "none", color: "white" }} href="https://www.linkedin.com/in/tm-omar-b7429a21b/" target="_blank"> <LinkedInIcon size={18} stroke={1.5} /></Link>
                    </ActionIcon>
                </Group>
            </Container>
        </div >
    );
}
export default Footer;