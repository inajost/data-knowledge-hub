import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title"><img src="img/dkh_logo_text.svg" height="100px"></img></h1>
        <p className="hero__subtitle">for researching online discourse</p>
      </div>
    </header>
  ); 
}

function Subheader() {
  return (
    <div class="subheader">
      <p class="subheader-text">
        The Data Knowledge Hub is a central resource for researchers, social scientists, data scientists, journalists, and policymakers, supporting independent studies on social media and online discourse.
      </p>
      <div class="chevronContainer">
        <a href="#about" class="chevronLink" aria-label="Scroll to Features">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#000000"
            class="chevronIcon"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </div>
    </div>
  ); 
}

function AboutSection() {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className="container" id="about" >
        <h2 className={styles.aboutHeading}>About the Data Knowledge Hub</h2>
        <div className={styles.aboutContent}>
          <div className={styles.imageWrapper}>
            <img
              src="/img/about_image.png"
              alt="Abstract representation of data knowledge"
              className={styles.aboutImage}
            />
          </div>
          <div className={styles.textWrapper}>
            <p>
              The Data Knowledge Hub is a collaborative open-source project. We always welcome contributions from the researchers and analysts – either via GitHub or by contacting us directly. To make facilitating contributions from a variety of people easier and to create a welcoming, inclusive, and healthy experience for everyone, the Data Knowledge Hub is released with a Code of Conduct. By contributing to this project, you agree to abide by its terms.
            </p>
            <p>
              The world of social media and digital platforms is developing rapidly. Disinformation, hate speech, and manipulative content are increasingly shaping our information flow. Current research is often fragmented or anecdotal.
            </p>
            <p>
              The Data Knowledge Hub provides a central platform for independent, data-driven research to promote better understanding and trusted insights into online discourse.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function CardsSection() {
  return (
    <section className={styles.cardsSection}>
      <div className="container">
        <div className={styles.cardsContainer}>
          <div className={styles.card}>
            <div className={styles.cardImage}>
              <img
                src="/img/hub_link_image.svg"
                alt="Abstract representation of the Hub"
                className={styles.cardImg}
              />
            </div>
            <h3 className={styles.cardTitle}>To the Hub</h3>
            <p className={styles.cardText}>
              The Data Knowledge Hub is a central resource for researchers, social scientists, journalists, and policymakers exploring social media and online discourse.
            </p>
            <a href="docs/background-rationale" className={styles.cardButton}>
              Getting started
            </a>
          </div>
          <div className={styles.card}>
            <div className={styles.cardImage}>
              <img
                src="/img/community_link.svg"
                alt="Code representation"
                className={styles.cardImg}
              />
            </div>
            <h3 className={styles.cardTitle}>To the GitHub-Community</h3>
            <p className={styles.cardText}>
              The Data Knowledge Hub is a collaborative open-source project. We always welcome contributions from the community – either via GitHub or by contacting us directly.
            </p>
            <a href="docs/contribute/06_01_how-to-contribute" className={styles.cardButton}>
              Community and Support
            </a> 
          </div>
        </div>
      </div>
    </section>
  );
}

function CallToAction() {
  return (
    <section id="cta" className={styles.ctaSection}>
      <div className="container" id="about" >
        <h2 className={styles.aboutHeading}>Got ideas? Doing research yourself? Contribute!</h2>
        <div className={styles.aboutContent}>
          <div className={styles.textWrapper}>
            <p>
            Join the community and contribute to deciphering the dynamics of digital discourse and creating well-founded insights for a better information culture! We always welcome contributions from the community - either via GitHub or by contacting us directly. </p>
          </div>
        </div>
      </div>
    </section>
  );
}


function BenefitsSection() {
  return(
    <section id="benefits" className={styles.benefitsSection}>
      <div className="container" id="about" >
        <h2 className={styles.aboutHeading}>Core benefits – Why participate?</h2>
        <div className={styles.aboutContent}>
          <div className={styles.benefitsDetailsWrapper}>
          <details>
            <summary>Access to resources</summary>
            Gain access to a comprehensive, centralized pool of data, tools and methods for researching online discourse and social media. Practical guidance for every stage of a research project: from data collection to analysis.
          </details>
          <details>
            <summary>Promotion of independent research</summary>

            This is the detailed content

            You can use Markdown here including **bold** and _italic_ text, and [inline link](https://docusaurus.io)
          </details>
          </div>
        </div>
      </div>
    </section>
  )
}

function CodeExamplesSection() {
  return(
    <section id="benefits" className={styles.examplesSection}>
      <div className="container" id="about" >
        <h2 className={styles.aboutHeading}>Code Examples</h2>
        <div className={styles.examplesContent}>
          <table>
            <thead>
              <tr>
                <th>Project</th>
                <th>Description</th>
                <th>Language</th>
                <th>Platform</th>
                <th>Code</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>tiktok-scraping</code></td>
                <td>Collect data on TikTok using puppeteer</td>
                <td>
                  JavaScript
                </td>
                <td>TikTok</td>
                <td>
                  <a
                    href="https://github.com/bertelsmannstift/data-knowledge-hub/tree/main/projects/tiktok-hashtags"
                    target="_blank"
                    >Code</a
                  >
                </td>
              </tr>
              <tr>
                <td><code>tiktok-hashtag-analysis</code></td>
                <td>Analyse TikTok hashtags</td>
                <td>
                  Python
                </td>
                <td>TikTok</td>
                <td>
                  <a
                    href="https://github.com/bertelsmannstift/data-knowledge-hub/tree/main/projects/tiktok-hashtags"
                    target="_blank"
                    >Code</a
                  >
                </td>
              </tr>
              <tr>
                <td><code>blog-webscraping</code></td>
                <td>Webscraping using rvest and selenium</td>
                <td>
                  R
                </td>
                <td>Blogs</td>
                <td>
                  <a
                    href="https://github.com/bertelsmannstift/data-knowledge-hub/tree/main/projects/website-scraping"
                    target="_blank"
                    >Code</a
                  >
                </td>
              </tr>
              <tr>
                <td><code>twitter-streaming</code></td>
                <td>Large-scale data collection on X (Twitter)</td>
                <td>
                  Python
                </td>
                <td>Twitter / X</td>
                <td>
                  <a
                    href="https://github.com/UnibwSparta/twitterapi"
                    target="_blank"
                    >Code</a
                  >
                </td>
              </tr>
              <tr>
                <td><code>twitter-social-network</code></td>
                <td>Social Network Analysis with R</td>
                <td>
                  R
                </td>
                <td>Twitter / X</td>
                <td>
                  <a
                    href="https://github.com/bertelsmannstift/data-knowledge-hub/tree/main/projects/social-network-analysis"
                    target="_blank"
                    >Code</a
                  >
                </td>
              </tr>
            </tbody>
          </table>

          </div>
        </div>
    </section>
  )
}

function TeamSection() {
  return (
    <section id="about" className={styles.teamSection}>
      <div className="container" id="about" >
        <h2 className={styles.aboutHeading}>Who is behind the Data Knowledge Hub?</h2>
        <div className={styles.aboutContent}>
          <div className={styles.textWrapper}>
            <p>
              The Data Knowledge Hub is a project of Upgrade Democracy, an initiative of the Bertelsmann Stiftung. The aim of the Hub is to provide researchers, data scientists, journalists and policy makers with centralised resources for independent research into social media and online discourse.
            </p>
            <p>
            Together with dozens of researchers and civil society organisations, we aim to promote research in the field of online discourse and thus contribute to strengthening democracy in digital spaces.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section class="say-hello-section">
      <div class="container">
        <h3 class="say-hello-title">Say hello!</h3>
        <hr class="say-hello-underline" />
        <p class="say-hello-text">
          Do you have any questions, suggestions, or ideas? We look forward to hearing from you! 
          Simply write an email to 
          <a 
            href="mailto:upgrade.democracy@bertelsmann-stiftung.de" 
            class="email-link"
            > upgrade.democracy@bertelsmann-stiftung.de</a
          >
        </p>
      </div>
    </section>
  )
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome! ${siteConfig.title}`}
      description="The Data Knowledge Hub for Researching Online Discourse (Data Knowledge Hub) is an initiative that aims to provide a central resource for researchers, social scientists, data scientists, practitioners, and policymakers interested in independently researching disinformation on social media platforms.">
      <main>
        <HomepageHeader />
        <Subheader />
        <AboutSection />
        <HomepageFeatures />
        <CardsSection />
        <CallToAction />
        <BenefitsSection />
        <CodeExamplesSection />
        <TeamSection />
        <ContactSection />
      </main>
    </Layout>
  );
}
