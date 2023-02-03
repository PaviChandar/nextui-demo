import { Button, Card, Grid, Row, Text, Image } from "@nextui-org/react"
// import { Image } from "@nextui-org/react/types/image/image"

const ProductList = ({ product }) => {
    return (
        <Grid xs={4} >
            <Card color="black" >
                <Card.Body>
                    <Row justify="center" align="center" >
                        <Image objectFit="cover" src={product.image} ></Image>
                    </Row>
                    <Row justify="center" align="center" >
                        <Text h4 size={20} css={{ m: 0 }} >{product.name}</Text>
                    </Row>
                    <Row justify="center" align="center" >
                        <Text h4 size={15} css={{ m: 0 }} >${product.price}</Text>
                    </Row>
                    <Row justify="center" align="center" >
                        <Button size="sm" css={{ mt:10 }} >Add to Cart</Button>
                    </Row>
                </Card.Body>
            </Card>
        </Grid>
    )
}

export default ProductList