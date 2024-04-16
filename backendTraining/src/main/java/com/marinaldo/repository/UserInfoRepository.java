package com.marinaldo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.marinaldo.model.UserInfo;

public interface UserInfoRepository extends JpaRepository<UserInfo, Integer>{

	UserInfo findByEmail(String email);

	

}
