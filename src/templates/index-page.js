import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import { Header, Container, Button } from "semantic-ui-react"
import Helmet from "react-helmet"

import { getUser, isLoggedIn } from "../services/auth"
import Layout from "../components/layout"

export const IndexPageTemplate = ({
  image,
  heading,
  subheading,
  mainpitch,
}) => {
  const handleIMPSubmit = async () => {
    const IMP = window.IMP
    IMP.init("imp83932662")

    IMP.request_pay(
      {
        pg: "html5_inicis",
        pay_method: "card",
        merchant_uid: "ORD20180131-0000011",
        name: "노르웨이 회전 의자",
        amount: 64900,
        buyer_email: "gildong@gmail.com",
        buyer_name: "홍길동",
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
      },
      rsp => {
        if (rsp.success) {
          console.log("성공")
        } else {
          alert("결제에 실패하였습니다 다시 시도해주세요")
        }
      }
    )
  }

  return (
    <Container>
      <Header as="h1">Hello {isLoggedIn() ? getUser().name : "world"}!</Header>
      <p>
        {isLoggedIn() ? (
          <>
            You are logged in, so check your{" "}
            <Link to="/app/profile">profile</Link>
            <br />
            <br />
            <Button onClick={handleIMPSubmit}>Spend your money</Button>
          </>
        ) : (
          <>
            You should <Link to="/app/login">log in</Link> to see restricted
            content
          </>
        )}
      </p>
      <Header as="h3">{mainpitch.title}</Header>
      <div>
        <img src={image} alt="startup school" width="600px" />
      </div>
      <strong>{heading}</strong>
      <p>{subheading}</p>
    </Container>
  )
}

const IndexPage = () => (
  <StaticQuery
    query={pageQuery}
    render={data => (
      <Layout>
        <Helmet>
          <script
            type="text/javascript"
            src="https://code.jquery.com/jquery-1.12.4.min.js"
          />
          <script
            type="text/javascript"
            src="https://cdn.iamport.kr/js/iamport.payment-1.1.5.js"
          />
        </Helmet>
        <IndexPageTemplate
          image={data.markdownRemark.frontmatter.image}
          heading={data.markdownRemark.frontmatter.heading}
          subheading={data.markdownRemark.frontmatter.subheading}
          mainpitch={data.markdownRemark.frontmatter.mainpitch}
        />
      </Layout>
    )}
  />
)

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        image
        heading
        subheading
        mainpitch {
          title
          description
        }
      }
    }
  }
`
