import React from "react";
import { Formik, Form } from "formik";

const Addproduct = () => {

  const handleAddProducts = (values) => {
    fetch('http://localhost:8080/products', 
    {method: 'POST', 
    headers: { 'Content-Type': 'application/json' },
    body:JSON.stringify(values)})
  }

return (
  <div>
    <h1 className="head">Add product</h1>

    <Formik
      initialValues={{
       productName: "",
       category: "",
       productPrice: "",
       productQuantity: "",
       discount: "",
       productDescription: ""
      }}
      onSubmit={(values) => {
       handleAddProducts(values)
      }}
    >
      {({ errors, touched }) => (
       
        <div className="container">
          <div className="modal">
            <div className="modal-container">
              <div className="modal-left">
                <Form>

                  <div className="input-block">
                    <label htmlFor="productName" className="input-label">product Name</label>
                    <input type="productName" autoComplete="off" name="productName" id="productName" placeholder="product name"
                    />
                    {errors.productName && touched.productName ? (
                      <div className="form-error">{errors.productName}</div>
                    ) : null}
                  </div>

                  <div className="input-block">
                    <label htmlFor="category" className="input-label">category</label>
                    <input type="category" autoComplete="off" name="category" id="category" placeholder="category"
                    />
                    {errors.category && touched.category ? (
                      <div className="form-error">{errors.category}</div>
                    ) : null}
                  </div>

                  <div className="input-block">
                    <label htmlFor="productPrice" className="input-label">product Price</label>
                    <input type="productPrice" autoComplete="off" name="productPrice" id="productPrice" placeholder="product price"/>
                    {errors.productPrice && touched.productPrice ? <div className="form-error">{errors.productPrice}</div> : null}
                  </div>

                  <div className="input-block">
                    <label htmlFor="productQuantity" className="input-label">product Quantity</label>
                    <input type="productQuantity" autoComplete="off" name="productQuantity" id="productQuantity" placeholder="product quantity"/>
                    {errors.productQuantity && touched.productQuantity ? <div className="form-error">{errors.productQuantity}</div> : null}
                  </div>

                  <div className="input-block">
                    <label htmlFor="discount" className="input-label">Discounted Price</label>
                    <input type="discount" autoComplete="off" name="discount" id="discount" placeholder="discount"/>
                    {errors.discount && touched.discount ? <div className="form-error">{errors.discount}</div> : null}
                  </div>

                  <div className="input-block">
                    <label htmlFor="productDescription" className="input-label">product Description</label>
                    <textarea type="productDescription" autoComplete="off" name="productDescription" id="productDescription" placeholder="write down the product description"
                    />
                    {errors.productDescription && touched.productDescription ? (
                      <div className="form-error">{errors.productDescription}</div>
                    ) : null}
                  </div>


                  <div className="modal-buttons">
                    <button className="input-button" type="submit">Submit</button>
                  </div>

                </Form>
              </div>
            </div>
          </div>
        </div>
      )}
    </Formik>
  </div>
)
}
export default Addproduct;
