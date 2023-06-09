IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[ToDo]') AND type in (N'U'))
ALTER TABLE [dbo].[ToDo] DROP CONSTRAINT IF EXISTS [FK_ToDo_Categories]
GO
/****** Object:  Table [dbo].[ToDo]    Script Date: 3/10/2023 12:44:34 PM ******/
DROP TABLE IF EXISTS [dbo].[ToDo]
GO
/****** Object:  Table [dbo].[Categories]    Script Date: 3/10/2023 12:44:34 PM ******/
DROP TABLE IF EXISTS [dbo].[Categories]
GO
/****** Object:  Table [dbo].[Categories]    Script Date: 3/10/2023 12:44:34 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Categories](
	[CategoryID] [int] IDENTITY(1,1) NOT NULL,
	[CatName] [nvarchar](25) NOT NULL,
	[CatDesc] [nvarchar](100) NULL,
 CONSTRAINT [PK_Categories] PRIMARY KEY CLUSTERED 
(
	[CategoryID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ToDo]    Script Date: 3/10/2023 12:44:35 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ToDo](
	[ToDoID] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](500) NOT NULL,
	[Done] [bit] NOT NULL,
	[CategoryID] [int] NULL,
 CONSTRAINT [PK_ToDo] PRIMARY KEY CLUSTERED 
(
	[ToDoID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Categories] ON 

INSERT [dbo].[Categories] ([CategoryID], [CatName], [CatDesc]) VALUES (1, N'Items', N'These are things that can be used for various of things.')
INSERT [dbo].[Categories] ([CategoryID], [CatName], [CatDesc]) VALUES (2, N'Test', N'Testing')
INSERT [dbo].[Categories] ([CategoryID], [CatName], [CatDesc]) VALUES (3, N'Gear', N'These are things that can be used for benifits of extra protection, take less damage.')
INSERT [dbo].[Categories] ([CategoryID], [CatName], [CatDesc]) VALUES (4, N'food', N'These are things that can be used for speed, health and not being so sleepy')
INSERT [dbo].[Categories] ([CategoryID], [CatName], [CatDesc]) VALUES (5, N'gems', N'These are usally used to evolve certian pokemon')
SET IDENTITY_INSERT [dbo].[Categories] OFF
GO
SET IDENTITY_INSERT [dbo].[ToDo] ON 

INSERT [dbo].[ToDo] ([ToDoID], [Name], [Done], [CategoryID]) VALUES (1, N'Get Bike', 0, 1)
INSERT [dbo].[ToDo] ([ToDoID], [Name], [Done], [CategoryID]) VALUES (2, N'Get Food', 1, 4)
INSERT [dbo].[ToDo] ([ToDoID], [Name], [Done], [CategoryID]) VALUES (3, N'Get Eletric Stone', 0, 5)
INSERT [dbo].[ToDo] ([ToDoID], [Name], [Done], [CategoryID]) VALUES (4, N'Testing', 0, 2)
INSERT [dbo].[ToDo] ([ToDoID], [Name], [Done], [CategoryID]) VALUES (5, N'Get Pokedex', 1, 3)
SET IDENTITY_INSERT [dbo].[ToDo] OFF
GO
ALTER TABLE [dbo].[ToDo]  WITH CHECK ADD  CONSTRAINT [FK_ToDo_Categories] FOREIGN KEY([CategoryID])
REFERENCES [dbo].[Categories] ([CategoryID])
GO
ALTER TABLE [dbo].[ToDo] CHECK CONSTRAINT [FK_ToDo_Categories]
GO
