package com.hishab.sk.ProductRestAPI;

import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ProductController {

	@Autowired
    private ProductService service;
     
    // RESTful API methods for Retrieval operations
	@GetMapping("/products")
	public List<Product> list() {
	    return service.listAll();
	}
	
	@GetMapping("/products/{id}")
	public ResponseEntity<Product> get(@PathVariable Integer id) {
	    try {
	        Product product = service.getId(id);
	        return new ResponseEntity<Product>(product, HttpStatus.OK);
	    } catch (NoSuchElementException e) {
	        return new ResponseEntity<Product>(HttpStatus.NOT_FOUND);
	    }      
	}
	 
    // RESTful API method for Create operation
	@PostMapping("/products")
	public void add(@RequestBody Product product) {
	    service.save(product);
	}
	
	// RESTful API method for Update operation
		@PutMapping("/products/{id}")
		public ResponseEntity<Product> update(@RequestBody Product product, @PathVariable Integer id) {
		    try {
		        Product existProduct = service.getId(id);
		        if(existProduct!=null) {
		        	existProduct.setName(product.getName());
		        	existProduct.setPrice(product.getPrice());
		        }
//		        service.save(existProduct);
		        Product changeProduct = service.save(existProduct);
		        return new ResponseEntity<>(changeProduct, HttpStatus.OK);
		    } catch (NoSuchElementException e) {
		        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		    }      
		}
	
//	
//	@PutMapping("/products/{id}")
//	public ResponseEntity<?> update(@RequestBody Product product, @PathVariable Integer id) {
//	    try {
//	        Product existProduct = service.getId(id);
//	        if(existProduct!=null) {
//	        	product.setName(String name);
//	        }
//	        service.save(product);
//	        return new ResponseEntity<>(HttpStatus.OK);
//	    } catch (NoSuchElementException e) {
//	        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//	    }      
//	}
	
//	if (repo.existsById(id)) {
//    	product.setPrice(id);
//    	product.setName(id);
//        return repo.save(product);
     
    // RESTful API method for Update operation
//	@PutMapping("/products/{id}")
//	public ResponseEntity<?> update(@RequestBody Product product, @PathVariable Integer id) {
//	    try {
//	        Optional<Product> existProduct = Optional.ofNullable(service.get(id));
//	        if(existProduct.isPresent()) {	        	
//	        	service.save(product);
//	        }
//	          
//	        return new ResponseEntity<>(HttpStatus.OK);
//	    } catch (NoSuchElementException e) {
//	        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//	    }      
//	}
	
//	@PutMapping("/products/{id}")
//	public Product updateProduct(@RequestBody Product product, @PathVariable Integer id) {
//		return service.updatePr(product, id);
//	}
     
    // RESTful API method for Delete operation
	@DeleteMapping("/products/{id}")
	public void delete(@PathVariable Integer id) {
	    service.delete(id);
	}
}
