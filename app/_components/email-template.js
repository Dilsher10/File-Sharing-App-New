import {
    Body,
    Button,
    Container,
    Column,
    Head,
    Heading,
    Html,
    Img,
    Preview,
    Row,
    Section,
    Text,
  } from "@react-email/components";
  
  import * as React from 'react';
  
  export const EmailTemplate = ({
    response,
  }) => (
    <Html>
      <Head />
      <Preview>New file received</Preview>
      <Body style={main}>
        <Container>
          <Section style={content}>
            <Row>
              <Img
                style={image}
                width={620}
                src="https://www.goanywhere.com/sites/default/files/goanywhere/77ef9d0c-0490-11ea-bdef-008cfa043684.jpg"
                alt="Header"
              />
            </Row>
  
            <Row style={{ ...boxInfos, paddingBottom: "0" }}>
              <Column>
                <Heading
                  as="h2"
                  style={{
                    fontSize: 26,
                    fontWeight: "bold",
                    textAlign: "left",
                  }}
                >
                  Hi, {response?.userName} share file with you.
                </Heading>
  
                <Text style={paragraph}>
                  <b>File Name: </b>
                  {response.fileName}
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>File Size: </b>
                  {response.fileSize}
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>File Type: </b>
                  {response.fileType}
                </Text>
                <Text
                  style={{
                    color: "rgb(0,0,0, 0.5)",
                    fontSize: 14,
                    marginTop: -5,
                  }}
                >
                  *Access and Download file
                </Text>
  
                <Text style={paragraph}>
                  Now you can also share file with File Sharing App
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  Click below button to access your file
                </Text>
              </Column>
            </Row>
            <Row style={{ ...boxInfos, paddingTop: "0" }}>
              <Column style={containerButton} colSpan={2}>
                <Button style={button} href={`${process.env.NEXT_PUBLIC_BASE_URL}download/${response?.id}`}>Click here to Download</Button>
              </Column>
            </Row>
          </Section>
  
          <Section style={containerImageFooter}>
            <Img
              style={image}
              width={620}
              src="https://www.ntaskmanager.com/wp-content/uploads/2020/08/best-file-sharing-apps.png"
              alt="Footer"
            />
          </Section>
  
          <Text
            style={{
              textAlign: "center",
              fontSize: 12,
              color: "rgb(0,0,0, 0.7)",
            }}
          >
            © 2025 File Sharing App | All Rights Reserved
          </Text>
        </Container>
      </Body>
    </Html>
  );
  
  const main = {
    backgroundColor: "#fff",
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  };
  
  const paragraph = {
    fontSize: 16,
  };
  
  const logo = {
    padding: "30px 20px",
  };
  
  const containerButton = {
    display: "flex",
    justifyContent: "center",
    width: "100%",
  };
  
  const button = {
    backgroundColor: "#e00707",
    borderRadius: 3,
    color: "#FFF",
    fontWeight: "bold",
    border: "1px solid rgb(0,0,0, 0.1)",
    cursor: "pointer",
    padding: "12px 30px",
  };
  
  const content = {
    border: "1px solid rgb(0,0,0, 0.1)",
    borderRadius: "3px",
    overflow: "hidden",
  };
  
  const image = {
    maxWidth: "100%",
  };
  
  const boxInfos = {
    padding: "20px",
  };
  
  const containerImageFooter = {
    padding: "45px 0 0 0",
  };
  