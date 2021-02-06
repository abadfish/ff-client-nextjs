import Layout from '../components/Layout'
import styled from 'styled-components'
import { Page, Content, PageMessage, SectionHeading, CardRowLeft, CardRowRight, Card } from './index'


const Benefits = () => {
    return (
        <Layout>
          <Page>
            <Content>
              <PageMessage>
                <SectionHeading>All Natural Ingredients.</SectionHeading>
                <p>Farriers’ Fix is made with only high quality, natural ingredients that provide vitamins A, D & E – all essential for good quality hooves.  There are no fillers in this hoof oil, each ingredient used serves a specific purpose.Competitors can also be assured that Farriers’ Fix Hoof Oil has tested negative under <strong>FEI guidelines</strong>.</p>
              </PageMessage>
              <CardRowLeft>
                  <Card>
                    <SectionHeading>Developed by Farriers, for Farriers.</SectionHeading>
                    <p>Originally developed for use by farriers to treat common hoof problems encountered in many horses, such as soreness, thrush, soft or brittle hoof composition, founder (laminitis), quarter cracks and white line disease, Farriers' Fix was one farrier's formula.  Experiments with various ingredients to form a topical solution led to the development of what is now called Farriers’ Fix Hoof Oil. </p>
                  </Card>
              </CardRowLeft>
              <CardRowRight>
                  <Card>
                    <img src="https://res.cloudinary.com/abadfish/image/upload/v1606864735/ffix/packing.jpg" alt="packing a hoof"/>
                  </Card>
              </CardRowRight>
            </Content>
          </Page>
        </Layout>
    )
}

export default Benefits
