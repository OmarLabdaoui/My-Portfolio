import React from 'react'
import toast, { Toaster } from 'react-hot-toast';
import {
    createStyles,
    Text,
    Title,
    SimpleGrid,
    TextInput,
    Textarea,
    Button,
    Group,
    ActionIcon,
} from '@mantine/core';
import { openModal, closeAllModals, closeModal } from '@mantine/modals';
import { openConfirmModal } from '@mantine/modals';
import { useRef } from 'react';
import { Link } from '@mui/material';
import emailjs from '@emailjs/browser';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from 'tabler-icons-react';
import { Phone } from 'tabler-icons-react';
import { MapPin } from 'tabler-icons-react';
import { SunHigh } from 'tabler-icons-react';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';

const useStyles = createStyles((theme) => ({
    wrapper: {
        minHeight: 400,
        boxSizing: 'border-box',
        backgroundImage: `linear-gradient(-60deg, ${theme.colors[theme.primaryColor][4]} 0%, ${theme.colors[theme.primaryColor][7]
            } 100%)`,
        borderRadius: theme.radius.md,
        padding: theme.spacing.xl * 2.5,

        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            padding: theme.spacing.xl * 1.5,
        },
    },

    title: {
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        color: theme.white,
        lineHeight: 1,
    },

    description: {
        color: theme.colors[theme.primaryColor][0],
        maxWidth: 300,

        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            maxWidth: '100%',
        },
    },

    form: {
        backgroundColor: theme.white,
        padding: theme.spacing.xl,
        borderRadius: theme.radius.md,
        boxShadow: theme.shadows.lg,
    },

    social: {
        color: theme.white,

        '&:hover': {
            color: theme.colors[theme.primaryColor][1],
        },
    },

    input: {
        backgroundColor: theme.white,
        borderColor: theme.colors.gray[4],
        color: theme.black,

        '&::placeholder': {
            color: theme.colors.gray[5],
        },
    },

    inputLabel: {
        color: theme.black,
    },

    control: {
        backgroundColor: theme.colors[theme.primaryColor][6],
    },
}));



function GetInTouch() {

    const form = React.createRef();;

    const sendEmail = (e) => {
        e.preventDefault();
        toast.promise(
            emailjs.sendForm('service_o3rkxut', 'template_jxvtr3b', form.current, '2FMcx_i-EGQHqX6jr')
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                }),
            {
                loading: 'Sending...',
                success: <b>Message sended</b>,
                error: <b>Could not Send.</b>,
            }
        );

        openModal()
        form.current.reset();


    };

    const { classes } = useStyles();
    const openModal = () => openConfirmModal({

        title: 'Thank Your For The Message',

        children: (
            <div className='font-semibold'>
                <Text size="md">
                    Thank Your For The Message,I Will Be In Touch with  You
                    In The Next Hours.
                </Text>

            </div >
        ),
        labels: { confirm: 'Confirm', cancel: 'Cancel' },
        onCancel: () => console.log('Cancel'),

    });
    function contacticon(Icon, title, desc) {
        return (
            <div className='text-white flex flex-row space-x-2 mb-5'>
                <div className='mt-2'>
                    <Icon />

                </div>
                <div className='flex flex-col '>
                    <p className="ml-2 text-white">{title}</p>
                    <p>{desc}</p>
                </div>
            </div >
        )
    }

    return (
        <div className={classes.wrapper} style={{ width: "1100Px" }}>
            <SimpleGrid cols={2} spacing={50} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
                <div>
                    <Title className={classes.title}>Contact Me</Title>
                    <Text className={classes.description} mt="sm" mb={30}>
                        Leave your email and we will get back to you within 24 hours
                    </Text>

                    {contacticon(AlternateEmailIcon, "Email", "labdaouio@gmail.com")}
                    {contacticon(Phone, "Phone", "+212 682301074")}
                    {contacticon(MapPin, "Address", "Casablnca Sidi Maaroufe,Mostakbal")}
                    {contacticon(SunHigh, "Working", "8a.m.- 5a.m.")}
                    <div className='flex items-center space-x-5 sm:ml-12 mt-11'>
                        <div className='  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full text-white p-4 animate-bounce drop-shadow-md'>

                            <Link className='text-white'
                                style={{ textDecoration: "none", color: "white" }} href="https://www.linkedin.com/in/tm-omar-b7429a21b/" target="_blank"> <LinkedInIcon fontSize="large" /></Link>

                        </div>
                        <div className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full text-white p-4 animate-bounce drop-shadow-md'>
                            <Link className='text-white' style={{ textDecoration: "none", color: "white" }} href="https://github.com/OmarLabdaoui" target="_blank"> <GitHubIcon fontSize="large" /></Link>
                        </div>
                        <div className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full text-white p-4 animate-bounce drop-shadow-md'>
                            <Link className='text-white' style={{ textDecoration: "none", color: "white" }} href="https://twitter.com/OLabdaoui1" target="_blank"> <TwitterIcon fontSize="large" /></Link>
                        </div>
                    </div>

                </div>
                <div className={classes.form} style={{ height: "350px", marginTop: "27px" }}>
                    <form ref={form} onSubmit={sendEmail}>
                        <TextInput

                            placeholder="your@email.com"
                            required
                            name="user_email"
                            classNames={{ input: classes.input, label: classes.inputLabel }}
                        />
                        <TextInput

                            name="user_name"
                            placeholder="Your Name"
                            mt="md"
                            classNames={{ input: classes.input, label: classes.inputLabel }}
                        />
                        <Textarea
                            required

                            placeholder="I want to order your goods"
                            minRows={4}
                            mt="md"
                            classNames={{ input: classes.input, label: classes.inputLabel }}
                            name="message"
                        />

                        <Group position="right" mt="md">
                            <button type='submit' className=' rounded-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold p-2 animate-pulse'>Send Message</button>
                        </Group>
                    </form>
                </div>
            </SimpleGrid >



        </div >
    );
}

export default GetInTouch