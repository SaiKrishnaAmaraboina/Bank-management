package com.sjprogramming.bankapp.controller;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import com.sjprogramming.bankapp.entity.Account;
import com.sjprogramming.bankapp.service.AccountService;
import org.springframework.web.bind.annotation.CrossOrigin;
import java.util.List;
@RestController
@RequestMapping("/account")
@CrossOrigin(origins = "http://localhost:4200")
public class AccountController {
	@Autowired
	AccountService service;
	//creating account
	@PostMapping("/create")
	public ResponseEntity<Account> createAccount(@RequestBody Account account) {
		Account createAccount=service.createAccount(account);
		return ResponseEntity.status(HttpStatus.CREATED).body(createAccount);
	}
	@GetMapping("/{accountNumber}")
	public Account getAccountByAccountNumber(@PathVariable Long accountNumber) {
		Account account=service.getAccountDetailsByAccountNumber(accountNumber);
		return account;
	}
	@GetMapping("/getallaccounts")
	public List<Account> getAllAccountsDetails(){
		List<Account>allAccountDetails=service.getAllAccountDetails();
		return allAccountDetails;
	}
	@PutMapping("/deposit/{accountNumber}/{amount}")
	public Account depositAccount(@PathVariable Long accountNumber,@PathVariable Double amount) {
	Account account=	service.depositAmount(accountNumber, amount);
		return account;
		
	}
	@PutMapping("/withdraw/{accountNumber}/{amount}")
	public Account withdrawAccount(@PathVariable Long accountNumber,@PathVariable Double amount) {
		Account account=service.withdrawAmount(accountNumber, amount);
		return account;
	}
	@DeleteMapping("/delete/{accountNumber}")
	public ResponseEntity<String>deleteAccount(@PathVariable Long accountNumber) {
		service.closeAccount(accountNumber);
		return ResponseEntity.status(HttpStatus.ACCEPTED).body("Accountclosed");
	}
	
}
