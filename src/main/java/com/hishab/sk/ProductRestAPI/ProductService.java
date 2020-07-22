package com.hishab.sk.ProductRestAPI;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
@Transactional
public class ProductService {

	 @Autowired
	    private ProductRepository repo;
	     
	    public List<Product> listAll() {
	        return repo.findAll();
	    }
	     
	    public Product save(Product product) {
	        return repo.save(product);
	    }
	     
	    public Product getId(Integer id) {
	        return repo.findById(id).get();
	    }
	     
	    public void delete(Integer id) {
	        repo.deleteById(id);
	    }
	    

//		public Product updatePr(Product product, Integer id) {
//	        Product existingProduct = repo.findById(product.getId()).orElse(null);
//	        Product existingProduct = repo.findById(id).get();
//
//	        existingProduct.setName(product.getName());
//	        existingProduct.setPrice(product.getPrice());
//	        return repo.save(existingProduct);
//		}
	    


//	public Product updatePr(Product product, Integer id) {
//	    try {
//		if (repo.existsById(id)) {
//	    	product.setPrice(id);
//	    	product.setName(id);
//            return repo.save(product);
//		} catch {
//			
//		}
//       
//	    }
//	}
}
