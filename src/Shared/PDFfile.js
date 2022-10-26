import React from "react";
import { Page, Text, Image, Document, StyleSheet } from "@react-pdf/renderer";
import { useLoaderData } from "react-router-dom";

const styles = StyleSheet.create({
    body: {
        paddingTop: 35,
        paddingBottom: 65,
        paddingHorizontal: 35,
    },
    title: {
        fontSize: 24,
        textAlign: "center",
    },
    text: {
        margin: 12,
        fontSize: 14,
        textAlign: "justify",
        fontFamily: "Times-Roman",
    },
    image: {
        marginVertical: 15,
        marginHorizontal: 100,
    },
    header: {
        fontSize: 12,
        marginBottom: 20,
        textAlign: "center",
        color: "grey",
    },
    pageNumber: {
        position: "absolute",
        fontSize: 12,
        bottom: 30,
        left: 0,
        right: 0,
        textAlign: "center",
        color: "grey",
    },
});

const PDFFile = () => {
    // const pdfData = useLoaderData()
    // const { title, details_course_description, picture, } = pdfData;
    return (
        <Document>
            <Page style={styles.body}>
                <Text style={styles.header} fixed></Text>
                {/* <Image style={styles.image} src={picture} />
                <Text style={styles.text}>
                    <div className="flex flex-col-reverse">
                        <div className='flex-1 flex-64 mb-4'><p>{details_course_description}</p></div>
                    </div>

                </Text> */}
                <Text
                    style={styles.pageNumber}
                    render={({ pageNumber, totalPages }) =>
                        `${pageNumber} / ${totalPages}`
                    }
                />


            </Page>
        </Document>
    );
};

export default PDFFile;