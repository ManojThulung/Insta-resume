import {
  PDFViewer,
  Page,
  Text,
  View,
  Document,
  StyleSheet,
} from "@react-pdf/renderer";
import { BioFormProps } from "@/types";

// Create styles
const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    borderBottom: "1px solid gray",
    paddingBottom: "6px",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    opacity: 0.9,
    textTransform: "uppercase",
  },
  subTitle: {
    fontSize: "14px",
    marginTop: "2px",
    opacity: 0.9,
  },
  headerContact: {
    lineHeight: "1.3",
  },
  page: {
    backgroundColor: "#ffffff",
    paddingVertical: 30,
    paddingHorizontal: 30,
    fontSize: 12,
    opacity: 0.6,
  },
  section: {
    paddingTop: 20,
    flexGrow: 1,
  },
  heading1: {
    fontSize: "14px",
    fontWeight: "bold",
    opacity: 0.9,
    textTransform: "uppercase",
  },
  text: {
    marginTop: "5px",
    padding: "0px 5px",
  },
});

const ResumePdf = ({ bioData }: { bioData: BioFormProps }) => {
  return (
    <PDFViewer showToolbar={false} className="aspect-[1/1.41] w-[60%]">
      <Document
        pageMode="fullScreen"
        style={{
          borderRadius: "20px",
        }}
      >
        <Page size="A4" style={styles.page}>
          <View style={styles.header}>
            <View>
              <Text style={styles.title}>
                {`${bioData?.first_name} ${bioData?.last_name}`}
              </Text>
              <Text style={styles.subTitle}>{bioData.job_title}</Text>
            </View>
            <View style={styles.headerContact}>
              <Text>{bioData.email}</Text>
              <Text>{bioData.phone}</Text>
              <Text>{bioData.address}</Text>
            </View>
          </View>
          {bioData.bio_summery.trim() && (
            <View style={styles.section}>
              <Text style={styles.heading1}>PROFILE & CAREER OBJECTIVE</Text>
              <Text style={styles.text}>{bioData.bio_summery}</Text>
            </View>
          )}
        </Page>
      </Document>
    </PDFViewer>
  );
};

export default ResumePdf;
