import React from 'react';
import Footer from '../components/footer/index';

export default function FooterContainer () {
    return (
        <Footer>
            <Footer.Wrapper>
                <Footer.Row>
                <Footer.Column>
                    <Footer.Title>About Us</Footer.Title>
                    <Footer.Link href="#"> Story</Footer.Link>
                    <Footer.Link href="#"> Clients</Footer.Link>
                    <Footer.Link href="#"> Testimonials</Footer.Link>

                </Footer.Column>

                <Footer.Column>
                    <Footer.Title>Catergories</Footer.Title>
                    <Footer.Link href="#"> Action</Footer.Link>
                    <Footer.Link href="#"> Cartoon</Footer.Link>
                    <Footer.Link href="#"> Comedy</Footer.Link>
                    <Footer.Link href="#"> Thriller</Footer.Link>

                </Footer.Column>

                <Footer.Column>
                    <Footer.Title>Social Media</Footer.Title>
                    <Footer.Link href="#"> Facebook</Footer.Link>
                    <Footer.Link href="#"> Instagram</Footer.Link>
                    <Footer.Link href="#"> Gmail</Footer.Link>

                </Footer.Column>
                </Footer.Row>
            </Footer.Wrapper>
        </Footer>
    )
}

