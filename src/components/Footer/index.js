import React from 'react'
import { animateScroll as scroll } from 'react-scroll';
import { FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink } from './FooterElements'
import{ FaFacebook,
    FaInstagram,
    
    FaLinkedin,
    
    FaTwitter} from 'react-icons/fa';
const Footer = () => {
    const toggleHome=()=>
    {
        scroll.scrollToTop();
    }
  return (
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle> About us</FooterLinkTitle>
                            
                            <FooterLink to="/signin">Who we are</FooterLink>
                            <FooterLink to="/signin">Blog</FooterLink>
                            <FooterLink to="/signin">Work with us</FooterLink>
                            <FooterLink to="/signin">Investor Relations</FooterLink>
                            <FooterLink to="/signin">Report Fraud</FooterLink>
                        
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle> For Resturants</FooterLinkTitle>
                            
                            <FooterLink to="/signin">Partner with us</FooterLink>
                            <FooterLink to="/signin">App for you</FooterLink>
                           
                        
                    </FooterLinkItems>
                </FooterLinksWrapper>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle> Learn More</FooterLinkTitle>
                            
                            <FooterLink to="/signin">Privacy</FooterLink>
                            <FooterLink to="/signin">Security</FooterLink>
                            <FooterLink to="/signin">Terms</FooterLink>
                            <FooterLink to="/signin">Sitemap</FooterLink>
                            
                        
                    </FooterLinkItems>
                    
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/' onClick={toggleHome}>
                        Food
                    </SocialLogo>
                    <WebsiteRights>Arka {new Date().getFullYear()} All Rights Reserved.</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                            <FaFacebook/>
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                            <FaInstagram/>
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                            <FaTwitter/>
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="LinkedIn">
                            <FaLinkedin/>
                        </SocialIconLink>

                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer