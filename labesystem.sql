	CREATE TABLE labesystem_turmas(
    id 					VARCHAR(255) PRIMARY KEY 	NOT NULL 	UNIQUE,
    nome 				VARCHAR(255) 				NOT NULL	UNIQUE
    );
    
	INSERT INTO  labesystem_turmas (`id`,`nome` )	VALUES ('1','Maryam');
	INSERT INTO  labesystem_turmas (`id`,`nome` )	VALUES ('2','Noether');
	INSERT INTO  labesystem_turmas (`id`,`nome` )	VALUES ('3','Newton');
	INSERT INTO  labesystem_turmas (`id`,`nome` )	VALUES ('4','Einstein');
	INSERT INTO  labesystem_turmas (`id`,`nome` )	VALUES ('5','Hawking');

    
	CREATE TABLE labesystem_hobbies(
    id 					VARCHAR(255) PRIMARY KEY 	NOT NULL 	UNIQUE,
    nome 				VARCHAR(255) 				NOT NULL	UNIQUE
    );
    
	INSERT INTO labesystem_hobbies (`id`,`nome` )	VALUES ('1','Andar de bicicleta');
	INSERT INTO labesystem_hobbies (`id`,`nome` )	VALUES ('2','Assistir filmes');
	INSERT INTO labesystem_hobbies (`id`,`nome` )	VALUES ('3','Assistir séries');
	INSERT INTO labesystem_hobbies (`id`,`nome` )	VALUES ('4','Jogar videogames');
	INSERT INTO labesystem_hobbies (`id`,`nome` )	VALUES ('5','Ler');
    
	CREATE TABLE labesystem_especialidades(
    id 					VARCHAR(255) PRIMARY KEY 	NOT NULL 	UNIQUE,
    nome 				VARCHAR(255) 				NOT NULL	UNIQUE
    );
    
	INSERT INTO labesystem_especialidades (`id`,`nome` )	VALUES ('1','JS');
	INSERT INTO labesystem_especialidades (`id`,`nome` )	VALUES ('2','CSS');
	INSERT INTO labesystem_especialidades (`id`,`nome` )	VALUES ('3','React');
	INSERT INTO labesystem_especialidades (`id`,`nome` )	VALUES ('4','Typescript');
	INSERT INTO labesystem_especialidades (`id`,`nome` )	VALUES ('5','POO');
    
    CREATE TABLE labesystem_estudantes(
    id 						VARCHAR(255) PRIMARY KEY	NOT NULL 	UNIQUE,
    nome 					VARCHAR(255) 				NOT NULL,
    email 					VARCHAR(255) 				NOT NULL 	UNIQUE,
    data_nasc 				VARCHAR(255)				NOT NULL,	
    turma_id 				VARCHAR(255)  				NOT NULL,
    hobbie_id 				VARCHAR(255)   				NOT NULL,
	FOREIGN KEY (turma_id) 	REFERENCES 		turmas(id),
	FOREIGN KEY (hobbie_id) REFERENCES 		hobbies(id)
    );
    
	INSERT INTO labesystem_estudantes (`id`,`nome`,`email`,`data_nasc`,`turma_id`, `hobbie_id` ) 
    VALUES ('1','Rafael Cacilhas','rafael@email.com','29-10-1992','1','2');
    
	INSERT INTO labesystem_estudantes (`id`,`nome`,`email`,`data_nasc`,`turma_id`, `hobbie_id`  ) 
    VALUES ('2','Gabriel Manoel','gabriel@email.com','17-05-1992','1','1');
    
	INSERT INTO labesystem_estudantes (`id`,`nome`,`email`,`data_nasc`,`turma_id`, `hobbie_id`  ) 
    VALUES ('3','Mariana Stamatakis','mariana@email.com','14-03-1992','1','4');
    
    
    CREATE TABLE labesystem_docentes(
    id 								VARCHAR(255) PRIMARY KEY	NOT NULL 	UNIQUE,
    nome 							VARCHAR(255) 				NOT NULL,
    email 							VARCHAR(255) 				NOT NULL 	UNIQUE,
    data_nasc 						VARCHAR(255)				NOT NULL,	
    turma_id 						VARCHAR(255)  				NOT NULL,
    especialidades_id 				VARCHAR(255)   				NOT NULL,
	FOREIGN KEY (turma_id) 			REFERENCES 		turmas(id),
	FOREIGN KEY (especialidades_id) REFERENCES 		especialidades(id)
    );
    
	INSERT INTO labesystem_docentes (`id`,`nome`,`email`,`data_nasc`,`turma_id`, `especialidades_id`  ) 
    VALUES ('1','Yuzo','yuzo@email.com','14-03-1982','1','4');
    
	SELECT * FROM labesystem_turmas;
	SELECT * FROM labesystem_hobbies;
	SELECT * FROM labesystem_especialidades;
	SELECT * FROM labesystem_estudantes;
	SELECT * FROM labesystem_docentes;



