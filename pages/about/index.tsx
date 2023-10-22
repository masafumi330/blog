import Layout from '../../components/layout'
import Container from '../../components/container'
import Header from '../../components/header'
import Head from 'next/head'
import { CMS_NAME } from '../../lib/constants'

export default function About() {
    return (
        <>
            <Layout>
            <Head>
            <title>{CMS_NAME}</title>
            </Head>
            <Container>
            <Header />
            <h1>About</h1>
            </Container>
        </Layout>
        </>
        
    );
    
}