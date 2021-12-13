	CREATE TABLE labesystem_turmas(
    id_t				VARCHAR(255) PRIMARY KEY 	NOT NULL 	UNIQUE,
    nome 				VARCHAR(255) 				NOT NULL	UNIQUE,
    modulo				VARCHAR(255)				DEFAULT 0
    );

    CREATE TABLE labesystem_estudantes(
    id 						VARCHAR(255) PRIMARY KEY	NOT NULL 	UNIQUE,
    nome 					VARCHAR(255) 				NOT NULL,
    email 					VARCHAR(255) 				NOT NULL 	UNIQUE,
    data_nasc 				VARCHAR(255)				NOT NULL,	
    turma_id 				VARCHAR(255)  				NOT NULL,
	FOREIGN KEY (turma_id) 	REFERENCES 		turmas(id)
    );
    
    CREATE TABLE labesystem_docentes(
    id 								VARCHAR(255) PRIMARY KEY	NOT NULL 	UNIQUE,
    nome 							VARCHAR(255) 				NOT NULL,
    email 							VARCHAR(255) 				NOT NULL 	UNIQUE,
    data_nasc 						VARCHAR(255)				NOT NULL,	
    turma_id 						VARCHAR(255)  				NOT NULL,
	FOREIGN KEY (turma_id) 			REFERENCES 		turmas(id)
    );

	CREATE TABLE labesystem_hobbies(
    id_h				VARCHAR(255) PRIMARY KEY 	NOT NULL 	UNIQUE,
    nome 				VARCHAR(255) 				NOT NULL	UNIQUE
    );

	CREATE TABLE labesystem_especialidades(
    id_e				VARCHAR(255) PRIMARY KEY 	NOT NULL 	UNIQUE,
    nome 				VARCHAR(255) 				NOT NULL	UNIQUE
    );

	CREATE TABLE labesystem_Est_Hob(
    id_e_h					VARCHAR(255) PRIMARY KEY 	NOT NULL 	UNIQUE,
    id_est 					VARCHAR(255) 				NOT NULL,
    id_hob					VARCHAR(255)				NOT NULL,
	FOREIGN KEY (id_est) 	REFERENCES 		labesystem_estudantes(id),
	FOREIGN KEY (id_hob) 	REFERENCES 		labesystem_hobbies(id)
    );
	
    CREATE TABLE labesystem_Doc_Espec(
    id_d_e					VARCHAR(255) PRIMARY KEY 	NOT NULL 	UNIQUE,
    id_doc 					VARCHAR(255) 				NOT NULL,
    id_espec				VARCHAR(255)				NOT NULL,
	FOREIGN KEY (id_doc) 	REFERENCES 		labesystem_docentes(id),
	FOREIGN KEY (id_espec) 	REFERENCES 		labesystem_especialidades(id)
    );

	SELECT * FROM labesystem_turmas;
    
	SELECT * FROM labesystem_estudantes;
	SELECT * FROM labesystem_hobbies;

	SELECT * FROM labesystem_docentes;
	SELECT * FROM labesystem_Doc_Espec;
	SELECT * FROM labesystem_especialidades;


    



	INSERT INTO  labesystem_turmas (`id_t`,`nome` )			VALUES ('1','Maryam');
	INSERT INTO  labesystem_turmas (`id_t`,`nome` )			VALUES ('2','Noether');
	INSERT INTO  labesystem_turmas (`id_t`,`nome` )			VALUES ('3','Newton');
	INSERT INTO  labesystem_turmas (`id_t`,`nome` )			VALUES ('4','Einstein');
	INSERT INTO  labesystem_turmas (`id_t`,`nome` )			VALUES ('5','Hawking');

	INSERT INTO labesystem_hobbies (`id_h`,`nome` )			VALUES ('1','Andar de bicicleta');
	INSERT INTO labesystem_hobbies (`id_h`,`nome` )			VALUES ('2','Assistir filmes');
	INSERT INTO labesystem_hobbies (`id_h`,`nome` )			VALUES ('3','Assistir séries');
	INSERT INTO labesystem_hobbies (`id_h`,`nome` )			VALUES ('4','Jogar videogames');
	INSERT INTO labesystem_hobbies (`id_h`,`nome` )			VALUES ('5','Ler');
    
	INSERT INTO labesystem_especialidades (`id_e`,`nome` )	VALUES ('1','JS');
	INSERT INTO labesystem_especialidades (`id_e`,`nome` )	VALUES ('2','CSS');
	INSERT INTO labesystem_especialidades (`id_e`,`nome` )	VALUES ('3','React');
	INSERT INTO labesystem_especialidades (`id_e`,`nome` )	VALUES ('4','Typescript');
	INSERT INTO labesystem_especialidades (`id_e`,`nome` )	VALUES ('5','POO');
    
	INSERT INTO labesystem_estudantes (`id`,`nome`,`email`,`data_nasc`,`turma_id`, `hobbie_id` ) 
    VALUES ('1','Rafael Cacilhas','rafael@email.com','29-10-1992','1','2');
    
	INSERT INTO labesystem_estudantes (`id`,`nome`,`email`,`data_nasc`,`turma_id`, `hobbie_id`  ) 
    VALUES ('2','Gabriel Manoel','gabriel@email.com','17-05-1992','1','1');
    
	INSERT INTO labesystem_estudantes (`id`,`nome`,`email`,`data_nasc`,`turma_id`, `hobbie_id`  ) 
    VALUES ('3','Mariana Stamatakis','mariana@email.com','14-03-1992','1','4');
    
	INSERT INTO labesystem_docentes (`id`,`nome`,`email`,`data_nasc`,`turma_id`  ) 
    VALUES ('1','Yuzo','yuzo@email.com','14-03-1982','1');
    
	INSERT INTO labesystem_Est_Hob (`id_e_h`,`id_est`,`id_hob`  ) VALUES ('1','1','2');
	INSERT INTO labesystem_Est_Hob (`id_e_h`,`id_est`,`id_hob`  ) VALUES ('2','1','4');
	INSERT INTO labesystem_Est_Hob (`id_e_h`,`id_est`,`id_hob`  ) VALUES ('3','2','5');
	INSERT INTO labesystem_Est_Hob (`id_e_h`,`id_est`,`id_hob`  ) VALUES ('4','3','5');
    
	INSERT INTO labesystem_Doc_Espec (`id_d_e`,`id_doc`,`id_espec`  ) VALUES ('1','1','2');
	INSERT INTO labesystem_Doc_Espec (`id_d_e`,`id_doc`,`id_espec`  ) VALUES ('2','1639082587548','3');
	INSERT INTO labesystem_Doc_Espec (`id_d_e`,`id_doc`,`id_espec`  ) VALUES ('3','1639082587548','5');


SELECT id,nome,emal,data_nasc,turma_id,nome_e FROM labesystem_docentes
LEFT JOIN labesystem_Doc_Espec
ON labesystem_docentes.id = labesystem_Doc_Espec.id_doc
LEFT JOIN labesystem_especialidades
ON labesystem_Doc_Espec.id_espec = labesystem_especialidades.id_e;


SELECT id,nome,email,data_nasc,turma_id,nome_h FROM labesystem_estudantes
LEFT JOIN labesystem_Est_Hob
ON labesystem_estudantes.id = labesystem_Est_Hob.id_est
LEFT JOIN labesystem_hobbies
ON labesystem_Est_Hob.id_hob = labesystem_hobbies.id_h;








