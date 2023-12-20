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
  page: {
    flexDirection: "row",
    backgroundColor: "#ffffff",
    width: "100%",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

const ResumePdf = ({ bioData }: { bioData: BioFormProps }) => {
  return (
    <PDFViewer showToolbar={false} className="aspect-[1/1.41] w-[60%]">
      <Document pageMode="fullScreen" style={{ borderRadius: "20px" }}>
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <Text>{bioData?.job_title}</Text>
          </View>
          <View style={styles.section}>
            <Text>Section #2</Text>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};

export default ResumePdf;
