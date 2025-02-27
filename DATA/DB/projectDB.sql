
SELECT * FROM country;
CREATE TABLE Country(
     id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL UNIQUE,
     iso VARCHAR(2) UNIQUE NOT NULL,
     name VARCHAR(80) NOT NULL
);

INSERT INTO Country(iso, name) VALUES 
('AF', 'Afghanistan'),
('AX', 'Aland Islands'),
('AL', 'Albania'),
('DZ', 'Algeria'),
('AS', 'American Samoa'),
('AD', 'Andorra'),
('AO', 'Angola'),
('AI', 'Anguilla'),
('AQ', 'Antarctica'),
('AG', 'Antigua and Barbuda'),
('AR', 'Argentina'),
('AM', 'Armenia'),
('AW', 'Aruba'),
('AU', 'Australia'),
('AT', 'Austria'),
('AZ', 'Azerbaijan'),
('BS', 'Bahamas'),
('BH', 'Bahrain'),
('BD', 'Bangladesh'),
('BB', 'Barbados'),
('BY', 'Belarus'),
('BE', 'Belgium'),
('BZ', 'Belize'),
('BJ', 'Benin'),
('BM', 'Bermuda'),
('BT', 'Bhutan'),
('BO', 'Bolivia'),
('BA', 'Bosnia and Herzegovina'),
('BW', 'Botswana'),
('BV', 'Bouvet Island'),
('BR', 'Brazil'),
('IO', 'British Indian Ocean Territory'),
('BN', 'Brunei Darussalam'),
('BG', 'Bulgaria'),
('BF', 'Burkina Faso'),
('BI', 'Burundi'),
('KH', 'Cambodia'),
('CM', 'Cameroon'),
('CA', 'Canada'),
('CV', 'Cape Verde'),
('KY', 'Cayman Islands'),
('CF', 'Central African Republic'),
('TD', 'Chad'),
('CL', 'Chile'),
('CN', 'China'),
('CX', 'Christmas Island'),
('CC', 'Cocos (Keeling) Islands'),
('CO', 'Colombia'),
('KM', 'Comoros'),
('CG', 'Congo'),
('CD', 'Congo, The Democratic Republic of the'),
('CK', 'Cook Islands'),
('CR', 'Costa Rica'),
('CI', 'Cote D"Ivoire'),
('HR', 'Croatia'),
('CU', 'Cuba'),
('CY', 'Cyprus'),
('CZ', 'Czech Republic'),
('DK', 'Denmark'),
('DJ', 'Djibouti'),
('DM', 'Dominica'),
('DO', 'Dominican Republic'),
('EC', 'Ecuador'),
('EG', 'Egypt'),
('SV', 'El Salvador'),
('GQ', 'Equatorial Guinea'),
('ER', 'Eritrea'),
('EE', 'Estonia'),
('ET', 'Ethiopia'),
('FK', 'Falkland Islands (Malvinas)'),
('FO', 'Faroe Islands'),
('FJ', 'Fiji'),
('FI', 'Finland'),
('FR', 'France'),
('GF', 'French Guiana'),
('PF', 'French Polynesia'),
('TF', 'French Southern Territories'),
('GA', 'Gabon'),
('GM', 'Gambia'),
('GE', 'Georgia'),
('DE', 'Germany'),
('GH', 'Ghana'),
('GI', 'Gibraltar'),
('GR', 'Greece'),
('GL', 'Greenland'),
('GD', 'Grenada'),
('GP', 'Guadeloupe'),
('GU', 'Guam'),
('GT', 'Guatemala'),
('GG', 'Guernsey'),
('GN', 'Guinea'),
('GW', 'Guinea-Bissau'),
('GY', 'Guyana'),
('HT', 'Haiti'),
('HM', 'Heard Island and McDonald Islands'),
('VA', 'Holy See (Vatican City State)'),
('HN', 'Honduras'),
('HK', 'Hong Kong'),
('HU', 'Hungary'),
('IS', 'Iceland'),
('IN', 'India'),
('ID', 'Indonesia'),
('IR', 'Iran, Islamic Republic of'),
('IQ', 'Iraq'),
('IE', 'Ireland'),
('IM', 'Isle of Man'),
('IL', 'Israel'),
('IT', 'Italy'),
('JM', 'Jamaica'),
('JP', 'Japan'),
('JE', 'Jersey'),
('JO', 'Jordan'),
('KZ', 'Kazakhstan'),
('KE', 'Kenya'),
('KI', 'Kiribati'),
('KP', 'Korea, Democratic People"S Republic of'),
('KR', 'Korea, Republic of'),
('KW', 'Kuwait'),
('KG', 'Kyrgyzstan'),
('LA', 'Lao People"S Democratic Republic'),
('LV', 'Latvia'),
('LB', 'Lebanon'),
('LS', 'Lesotho'),
('LR', 'Liberia'),
('LY', 'Libyan Arab Jamahiriya'),
('LI', 'Liechtenstein'),
('LT', 'Lithuania'),
('LU', 'Luxembourg'),
('MO', 'Macao'),
('MK', 'Macedonia, The Former Yugoslav Republic of'),
('MG', 'Madagascar'),
('MW', 'Malawi'),
('MY', 'Malaysia'),
('MV', 'Maldives'),
('ML', 'Mali'),
('MT', 'Malta'),
('MH', 'Marshall Islands'),
('MQ', 'Martinique'),
('MR', 'Mauritania'),
('MU', 'Mauritius'),
('YT', 'Mayotte'),
('MX', 'Mexico'),
('FM', 'Micronesia, Federated estados of'),
('MD', 'Moldova, Republic of'),
('MC', 'Monaco'),
('MN', 'Mongolia'),
('ME', 'Montenegro'),
('MS', 'Montserrat'),
('MA', 'Morocco'),
('MZ', 'Mozambique'),
('MM', 'Myanmar'),
('NA', 'Namibia'),
('NR', 'Nauru'),
('NP', 'Nepal'),
('NL', 'Netherlands'),
('AN', 'Netherlands Antilles'),
('NC', 'New Caledonia'),
('NZ', 'New Zealand'),
('NI', 'Nicaragua'),
('NE', 'Niger'),
('NG', 'Nigeria'),
('NU', 'Niue'),
('NF', 'Norfolk Island'),
('MP', 'Northern Mariana Islands'),
('NO', 'Norway'),
('OM', 'Oman'),
('PK', 'Pakistan'),
('PW', 'Palau'),
('PS', 'Palestinian Territory, Occupied'),
('PA', 'Panama'),
('PG', 'Papua New Guinea'),
('PY', 'Paraguay'),
('PE', 'Peru'),
('PH', 'Philippines'),
('PN', 'Pitcairn'),
('PL', 'Poland'),
('PT', 'Portugal'),
('PR', 'Puerto Rico'),
('QA', 'Qatar'),
('RE', 'Reunion'),
('RO', 'Romania'),
('RU', 'Russian Federation'),
('RW', 'Rwanda'),
('SH', 'Saint Helena'),
('KN', 'Saint Kitts and Nevis'),
('LC', 'Saint Lucia'),
('PM', 'Saint Pierre and Miquelon'),
('VC', 'Saint Vincent and the Grenadines'),
('WS', 'Samoa'),
('SM', 'San Marino'),
('ST', 'Sao Tome and Principe'),
('SA', 'Saudi Arabia'),
('SN', 'Senegal'),
('RS', 'Serbia'),
('SC', 'Seychelles'),
('SL', 'Sierra Leone'),
('SG', 'Singapore'),
('SK', 'Slovakia'),
('SI', 'Slovenia'),
('SB', 'Solomon Islands'),
('SO', 'Somalia'),
('ZA', 'South Africa'),
('GS', 'South Georgia and the South Sandwich Islands'),
('ES', 'Spain'),
('LK', 'Sri Lanka'),
('SD', 'Sudan'),
('SR', 'Suriname'),
('SJ', 'Svalbard and Jan Mayen'),
('SZ', 'Swaziland'),
('SE', 'Sweden'),
('CH', 'Switzerland'),
('SY', 'Syrian Arab Republic'),
('TW', 'Taiwan, Province of China'),
('TJ', 'Tajikistan'),
('TZ', 'Tanzania, United Republic of'),
('TH', 'Thailand'),
('TL', 'Timor-Leste'),
('TG', 'Togo'),
('TK', 'Tokelau'),
('TO', 'Tonga'),
('TT', 'Trinidad and Tobago'),
('TN', 'Tunisia'),
('TR', 'Turkey'),
('TM', 'Turkmenistan'),
('TC', 'Turks and Caicos Islands'),
('TV', 'Tuvalu'),
('UG', 'Uganda'),
('UA', 'Ukraine'),
('AE', 'United Arab Emirates'),
('GB', 'United Kingdom'),
('US', 'United estados'),
('UM', 'United estados Minor Outlying Islands'),
('UY', 'Uruguay'),
('UZ', 'Uzbekistan'),
('VU', 'Vanuatu'),
('VE', 'Venezuela'),
('VN', 'Viet Nam'),
('VG', 'Virgin Islands, British'),
('VI', 'Virgin Islands, U.S.'),
('WF', 'Wallis and Futuna'),
('EH', 'Western Sahara'),
('YE', 'Yemen'),
('ZM', 'Zambia'),
('ZW', 'Zimbabwe');

SELECT * FROM Country WHERE ISO = 'BR';

CREATE TABLE State (
        id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL UNIQUE,
        UF VARCHAR(2) NOT NULL,
        name VARCHAR(80) NOT NULL,
        id_Country VARCHAR(2) NOT NULL DEFAULT 31,
        FOREIGN KEY (id_Country) REFERENCES Country(id)
        ON UPDATE CASCADE ON DELETE CASCADE
);

SELECT * FROM "Country";

INSERT INTO State (UF, NAME)
VALUES
('AC', 'Acre'),
('AL', 'Alagoas'),
('AP', 'Amapá'),
('AM', 'Amazonas'),
('BA', 'Bahia'),
('CE', 'Ceará'),
('DF', 'Distrito Federal'),
('ES', 'Espírito Santo'),
('GO', 'Goiás'),
('MA', 'Maranhão'),
('MT', 'Mato Grosso'),
('MS', 'Mato Grosso do Sul'),
('MG', 'Minas Gerais'),
('PA', 'Pará'),
('PB', 'Paraíba'),
('PR', 'Paraná'),
('PE', 'Pernambuco'),
('PI', 'Piauí'),
('RJ', 'Rio de Janeiro'),
('RN', 'Rio Grande do Norte'),
('RS', 'Rio Grande do Sul'),
('RO', 'Rondônia'),
('RR', 'Roraima'),
('SC', 'Santa Catarina'),
('SP', 'São Paulo'),
('SE', 'Sergipe'),
('TO', 'Tocantins');


SELECT id FROM State WHERE UF='SP';

CREATE TABLE City(
    id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL UNIQUE,
    name VARCHAR2(80) NOT NULL,
    id_State INTEGER NOT NULL DEFAULT 25,
    FOREIGN KEY(id_State) REFERENCES State(id)
    ON UPDATE CASCADE ON DELETE CASCADE
);


INSERT INTO City(name)VALUES('São Paulo'), ('São Caetano do Sul'), ('Mauá'),('São Bernardo do Campo'), ('São José dos Campos'),('São José do Rio Preto');

SELECT * FROM City;
DROP  TABLE type_document;

CREATE TABLE type_document(
    abbr VARCHAR(5) PRIMARY KEY NOT NULL UNIQUE,
    name VARCHAR(200) NOT NULL,
    origen  INTEGER DEFAULT 31,
    FOREIGN KEY (origen) REFERENCES country(id)
    ON UPDATE CASCADE ON DELETE CASCADE
);

SELECT * FROM type_document;
INSERT INTO type_document (abbr, name, origen) VALUES
('RG', 'Registro Geral', 31),  -- Registro Geral (RG)
('CPF', 'Cadastro de Pessoa Física', 31), -- Cadastro de Pessoa Física (CPF)
('CNH', 'Carteira Nacional de Habilitação', 31), -- Carteira Nacional de Habilitação (CNH)
('CTPS', 'Carteira de Trabalho e Previdência Social', 31), -- Carteira de Trabalho e Previdência Social (CTPS)
('TITULO', 'Título de Eleitor', 31), -- Título de Eleitor
('RESERV', 'Certificado de Reservista', 31), -- Certificado de Reservista
('PASSAP', 'Passaporte', 31), -- Passaporte
('CNPJ', 'Cadastro Nacional de Pessoa Jurídica', 31), -- Cadastro Nacional de Pessoa Jurídica (CNPJ)
('OAB', 'Carteira da Ordem dos Advogados do Brasil', 31), -- Carteira da Ordem dos Advogados do Brasil (OAB)
('CRM', 'Carteira do Conselho Regional de Medicina', 31), -- Carteira do Conselho Regional de Medicina (CRM)
('CREA', 'Carteira do Conselho Regional de Engenharia e Agronomia', 31), -- Carteira do Conselho Regional de Engenharia e Agronomia (CREA)
('CRF', 'Carteira do Conselho Regional de Farmácia', 31), -- Carteira do Conselho Regional de Farmácia (CRF)
('CRP', 'Carteira do Conselho Regional de Psicologia', 31), -- Carteira do Conselho Regional de Psicologia (CRP)
('CRN', 'Carteira do Conselho Regional de Nutricionistas', 31), -- Carteira do Conselho Regional de Nutricionistas (CRN)
('CRA', 'Carteira do Conselho Regional de Administração', 31), -- Carteira do Conselho Regional de Administração (CRA)
('CORE', 'Carteira do Conselho Regional dos Representantes Comerciais', 31), -- Carteira do Conselho Regional dos Representantes Comerciais (CORE)
('RNE', 'Registro Nacional de Estrangeiro', 31), -- Registro Nacional de Estrangeiro (RNE)
('RNM', 'Registro Nacional Migratório', 31); -- Registro Nacional Migratório (RNM)


CREATE TABLE Person(

)"

"

DROP TABLE "Location";

CREATE TABLE Location (
 id INTEGER AUTO INCREMENT NOT NULL UNIQUE,
 location_type VARCHAR(80) NOT NULL DEFAULT "RUA",
 location INTEGER(4) NOT NULL,
 complement_type VARCHAR(80) DEFAULT NULL,
 complement VARCHAR(120) DEFAULT NULL,
 neighberhood VARCHAR(100) NOT NULL,
 CEP VARCHAR(20) NOT NULL,
 id_STATE INTEGER NOT NULL DEFAULT 25,
 id_City INTEGER NOT NULL DEFAULT 1,
 id_Country INTEGER NOT NULL DEFAULT 31,
 FOREIGN KEY (id_STATE) REFERENCES State(id)
 ON UPDATE CASCADE ON DELETE CASCADE,
 FOREIGN KEY (id_CITY) REFERENCES City(id)
 ON UPDATE CASCADE ON DELETE CASCADE,
 FOREIGN KEY (id_COUNTRY) REFERENCES Country(id)
 ON UPDATE CASCADE ON DELETE CASCADE
);


SELECT * FROM "Country" WHERE Country.name("BRAZIL");
CREATE TABLE Document(
    register VARCHAR(200) NOT NULL UNIQUE PRIMARY KEY,
    id_type_document
)






CREATE TABLE Person (
    idPerrson INT PRIMARY KEY AUTOINCREMENT NOT NULL UNIQUE,
    account_or_profile VARCHAR(200) NOT NULL,
    email_principal VARCHAR(200) NOT NULL,
    password_or_CNPJ_Hash VARCHAR(200) NOT NULL UNIQUE,
    type CHAR(2) NOT NULL DEFAULT "PF"
);
 

SELECT * FROM Person;
DROP TABLE Country;
DROP TABLE "State";

DROP TABLE "City";