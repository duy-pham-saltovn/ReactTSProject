export interface IPost {
  post_id: number
  post_title: string
  post_slug: string
  short_desc: string
  post_content: string
  hat_id: number
  publish: boolean
  format: number
  trending: number
  popular: number
  editor_choice: number
  cate_id: number
  brand_id: any
  relate: any
  time_line: any
  high_light: any
  tag_relate: string
  tag_suggest: any
  time: any
  start_date: any
  end_date: any
  organ_unit: any
  place: any
  google_map: any
  media_id: string
  images: Thumbnail[]
  video_link: any
  view_rate: number
  choice_rate: number
  deleted_at: any
  created_by: number
  modified_by: number
  created_at: string
  updated_at: string
  hat: Hat
  image: Image
  cate: Cate
}

export interface Thumbnail {
  media_id: number
  media_url: string
}

export interface Hat {
  id: number
  name: string
  slug: string
  order: number
  status: boolean
  created_by: number
  modified_by: any
  created_at: string
  updated_at: string
}

export interface Image {
  media_id: number
  media_title: string
  media_desc: any
  media_type: string
  media_url: string
  media_size: string
  status: number
  created_by: number
  modified_by: any
  deleted_at: any
  created_at: string
  updated_at: string
}

export interface Cate {
  cate_id: number
  cate_name: string
  cate_slug: string
  cate_status: number
  cate_sort: number
  created_by: number
  modified_by: number
  created_at: string
  updated_at: string
  deleted_at: any
}

export interface IDetail {
  post_id: number
  post_title: string
  post_slug: string
  hat_id: number
  format: number
  popular: number
  trending: number
  short_desc: string
  post_content: string
  cate_id: number
  brand_id: any
  tag_relate: string
  tag_suggest: any
  view_rate: number
  choice_rate: number
  created_at: string
  updated_at: string
  created_by: number
  video_link: any
  media_id: string
  relate: any
  name: string
  slug: string
  media_url: string
  full_name: string
  profile_url: string
  uuid: string
  nick_name: string
  is_new_avatar: number
  cate: Cate
  brand: any
}